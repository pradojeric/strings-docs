export type Section = { id: string; title: string; number: string; markdown: string; searchText: string };
export function splitDocument(source: string): { preface: string; sections: Section[] } {
  const lines=source.replace(/\r\n/g,'\n').split('\n');
  const starts=lines.flatMap((line,i)=>/^##\s+/.test(line)?[i]:[]);
  const preface=lines.slice(0,starts[0]).join('\n');
  const sections=starts.map((start,index)=>{
    const heading=lines[start].replace(/^##\s+/,'');
    const match=heading.match(/^(\d+)\.\s+(.+)$/);
    const number=match?.[1] ?? 'A'; const title=match?.[2] ?? heading;
    const markdown=lines.slice(start+1,starts[index+1]??lines.length).join('\n');
    return {id:match?`section-${number}`:'appendix-a',number,title,markdown,searchText:`${heading}\n${markdown}`.toLowerCase()};
  });
  return {preface,sections};
}
export function matchingSections(sections: Section[], query:string): Section[] {
  const terms=query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return terms.length?sections.filter(section=>terms.every(term=>section.searchText.includes(term))):sections;
}
function escapeHtml(s:string):string {return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function inline(s:string, status=false):string {
  const text=escapeHtml(s).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/\*([^*]+)\*/g,'<em>$1</em>').replace(/`([^`]+)`/g,'<code>$1</code>');
  return status ? text.replace(/\b(Locked|Proposed|Deferred|TBD|Initial tuning)\b/gi,match=>`<span class="decision decision-${match.toLowerCase().replace(/\s+/g,'-')}">${match}</span>`) : text;
}
function cells(line:string):string[] {return line.trim().replace(/^\|/,'').replace(/\|$/,'').split('|').map(cell=>cell.trim());}
export function markdownToHtml(markdown:string):string {
  const lines=markdown.split('\n');const html:string[]=[];let i=0;
  while(i<lines.length){
    const line=lines[i].trim(); if(!line){i++;continue;}
    const heading=line.match(/^(#{1,6})\s+(.+)$/);
    if(heading){const level=Math.min(6,heading[1].length+1);html.push(`<h${level}>${inline(heading[2],true)}</h${level}>`);i++;continue;}
    if(/^---+$/.test(line)){html.push('<hr>');i++;continue;}
    if(line.startsWith('|') && i+1<lines.length && /^\|?[\s|:-]+\|?$/.test(lines[i+1].trim())){
      const header=cells(line);i+=2;const rows:string[][]=[];while(i<lines.length && lines[i].trim().startsWith('|'))rows.push(cells(lines[i++]));
      html.push(`<div class="table-wrap"><table><thead><tr>${header.map(c=>`<th scope="col">${inline(c)}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map(c=>`<td>${inline(c,/^(locked|proposed|deferred|tbd|initial tuning)$/i.test(c))}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);continue;
    }
    if(/^>\s?/.test(line)){const quoted:string[]=[];while(i<lines.length&&/^>\s?/.test(lines[i].trim()))quoted.push(lines[i++].trim().replace(/^>\s?/,''));html.push(`<blockquote>${inline(quoted.join(' '))}</blockquote>`);continue;}
    const list=line.match(/^([-*]|\d+\.)\s+(.+)/);
    if(list){const ordered=/\d/.test(list[1]);const items:string[]=[];while(i<lines.length){const item=lines[i].trim().match(/^([-*]|\d+\.)\s+(.+)/);if(!item||/\d/.test(item[1])!==ordered)break;items.push(`<li>${inline(item[2])}</li>`);i++;}html.push(`<${ordered?'ol':'ul'}>${items.join('')}</${ordered?'ol':'ul'}>`);continue;}
    const paragraph:string[]=[line];i++;while(i<lines.length&&lines[i].trim()&&!/^(#{1,6}\s|\||>|[-*]\s|\d+\.\s|---+$)/.test(lines[i].trim()))paragraph.push(lines[i++].trim());
    html.push(`<p>${inline(paragraph.join(' '))}</p>`);
  }
  return html.join('\n');
}
