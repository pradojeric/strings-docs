import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { splitDocument, matchingSections, markdownToHtml } from '../src/document.ts';
const source=readFileSync(new URL('../STRINGS_Game_Design_Document_v1.0.md',import.meta.url),'utf8');
const {preface,sections}=splitDocument(source);
test('all twenty numbered sections and the glossary remain available',()=>{
  assert.equal(sections.length,21);assert.deepEqual(sections.slice(0,20).map(s=>s.number),Array.from({length:20},(_,i)=>String(i+1)));
  assert.equal(sections[20].id,'appendix-a');assert.match(preface,/Design baseline/);
  for(const heading of source.matchAll(/^##\s+(.+)$/gm)) assert.ok(sections.some(s=>heading[1].includes(s.title)));
});
test('search finds key mechanics regardless of capitalization and requires every term',()=>{
  assert.ok(matchingSections(sections,'light mend').some(s=>s.id==='section-8'));
  assert.ok(matchingSections(sections,'GUARDIAN SOUL').some(s=>s.id==='section-4'));
  assert.equal(matchingSections(sections,'nonexistent nonsense').length,0);
  assert.equal(matchingSections(sections,'').length,21);
});
test('tables, lists, emphasis, and raw HTML are rendered safely',()=>{
  const html=markdownToHtml('### Title\n\n| Rule | Status |\n| --- | --- |\n| **Echo** | Locked |\n\n- Find\n- Collect\n\n<script>alert(1)</script>');
  assert.match(html,/<h4>Title<\/h4>/);assert.match(html,/<table>/);assert.match(html,/<strong>Echo<\/strong>/);assert.match(html,/<ul>/);assert.ok(!html.includes('<script>'));assert.match(html,/&lt;script&gt;/);
  assert.doesNotMatch(markdownToHtml('Read the locked shot.'),/decision-locked/);
});
test('locked campaign, persistence and healing rules remain present in the source sections',()=>{
  const text=sections.map(s=>s.markdown).join('\n');
  for(const phrase of ['no required three-region continuous run','committed immediately','Cooldown-only healing','No passive health regeneration','No anchor destruction']) assert.ok(text.toLowerCase().includes(phrase.toLowerCase()),phrase);
});
