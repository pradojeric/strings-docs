import './style.css';
import source from '../STRINGS_Game_Design_Document_v1.0.md?raw';
import sourceUrl from '../STRINGS_Game_Design_Document_v1.0.md?url';
import { markdownToHtml, matchingSections, splitDocument } from './document.ts';

const get = <T extends HTMLElement>(id:string):T => document.getElementById(id) as T;
const {preface,sections}=splitDocument(source);
const nav=get<HTMLElement>('navigation'), documentRoot=get<HTMLElement>('document');
const search=get<HTMLInputElement>('search'), clear=get<HTMLButtonElement>('clear-search');
const result=get<HTMLElement>('search-meta'), noResults=get<HTMLElement>('no-results');
const sidebar=get<HTMLElement>('sidebar'), menu=get<HTMLButtonElement>('menu-toggle');
get<HTMLAnchorElement>('source-link').href=sourceUrl;
get('preface').innerHTML=markdownToHtml(preface);
const groups=[{label:'START HERE',min:1,max:2},{label:'THE EXPERIENCE',min:3,max:6},{label:'GAME SYSTEMS',min:7,max:10},{label:'THE WORLD',min:11,max:14},{label:'PRODUCTION',min:15,max:20},{label:'REFERENCE',min:21,max:21}];
for(const group of groups){
  const groupSections=sections.filter(s=>{const n=Number(s.number)||21;return n>=group.min&&n<=group.max;});
  const heading=document.createElement('div');heading.className='nav-group';heading.textContent=group.label;nav.append(heading);
  for(const section of groupSections){const link=document.createElement('a');link.href=`#${section.id}`;link.className='nav-link';link.dataset.section=section.id;
    const index=document.createElement('span');index.textContent=section.number==='A'?'A':section.number.padStart(2,'0');
    const label=document.createElement('span');label.textContent=section.title;link.append(index,label);nav.append(link);}
}
for(const section of sections){
  const el=document.createElement('article');el.id=section.id;el.className='doc-section';el.dataset.section=section.id;
  const heading=document.createElement('div');heading.className='chapter-heading';
  const index=document.createElement('span');index.className='chapter-index';index.textContent=section.number==='A'?'A':section.number.padStart(2,'0');
  const title=document.createElement('h3');title.textContent=section.title;heading.append(index,title);
  const body=document.createElement('div');body.className='prose';body.innerHTML=markdownToHtml(section.markdown);
  el.append(heading,body);documentRoot.append(el);
}
const links=[...nav.querySelectorAll<HTMLAnchorElement>('.nav-link')];
function applySearch(){
  const query=search.value.trim();const matches=matchingSections(sections,query);const ids=new Set(matches.map(s=>s.id));
  documentRoot.querySelectorAll<HTMLElement>('.doc-section').forEach(section=>{section.hidden=!ids.has(section.id);});
  links.forEach(link=>{link.hidden=!ids.has(link.dataset.section??'');});
  nav.querySelectorAll<HTMLElement>('.nav-group').forEach(group=>{let next=group.nextElementSibling;let visible=false;while(next&&!next.classList.contains('nav-group')){if(!(next as HTMLElement).hidden)visible=true;next=next.nextElementSibling;}group.hidden=!visible;});
  clear.hidden=!query; noResults.hidden=matches.length>0;
  result.textContent=query?`${matches.length} ${matches.length===1?'section':'sections'} matching “${query}”`:'';
}
search.addEventListener('input',applySearch);clear.addEventListener('click',()=>{search.value='';applySearch();search.focus();});
search.addEventListener('keydown',event=>{if(event.key==='Escape'&&search.value){search.value='';applySearch();}else if(event.key==='Enter'){const first=documentRoot.querySelector<HTMLElement>('.doc-section:not([hidden])');if(first)first.scrollIntoView({behavior:'smooth'});}});
window.addEventListener('keydown',event=>{const target=event.target as HTMLElement;if(event.key==='/'&&!['INPUT','TEXTAREA'].includes(target.tagName)&&!target.isContentEditable){event.preventDefault();search.focus();search.scrollIntoView({block:'center',behavior:'smooth'});}});
menu.addEventListener('click',()=>{const open=sidebar.classList.toggle('is-open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
nav.addEventListener('click',event=>{if((event.target as HTMLElement).closest('a')){sidebar.classList.remove('is-open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');}});
window.addEventListener('hashchange',()=>{const id=decodeURIComponent(location.hash.slice(1));if(id&&document.getElementById(id)?.hidden){search.value='';applySearch();document.getElementById(id)?.scrollIntoView();}});
const observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){links.forEach(link=>{const active=link.dataset.section===entry.target.id;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}},{rootMargin:'-18% 0px -70% 0px'});
documentRoot.querySelectorAll('.doc-section').forEach(section=>observer.observe(section));
