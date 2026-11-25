// Usage: npm install @pkmn/dex && node gen-dex.js . > dex.json
// Each row: [name, dexNumber, hp, atk, def, spa, spd, spe, types]
const {Dex}=require(require('path').resolve(process.argv[2]||'.','node_modules/@pkmn/dex'));
const all=Dex.species.all();
const keep=all.filter(s=>s.exists&&s.num>0&&(!s.isNonstandard||['Past','Unobtainable','Future'].includes(s.isNonstandard))&&!s.name.includes('-Gmax'));
keep.sort((a,b)=>a.num-b.num||a.name.localeCompare(b.name));
const seen=new Set(),out=[];
for(const s of keep){if(seen.has(s.name))continue;seen.add(s.name);const b=s.baseStats;out.push([s.name,s.num,b.hp,b.atk,b.def,b.spa,b.spd,b.spe,s.types.join('/')])}
console.error('count',out.length,'max num',Math.max(...out.map(x=>x[1])));
process.stdout.write(JSON.stringify(out));
