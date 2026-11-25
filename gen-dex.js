const {Dex}=require(process.argv[2]+'/node_modules/@pkmn/dex');
const all=Dex.species.all();
const tags={};for(const s of all){tags[s.isNonstandard||'none']=(tags[s.isNonstandard||'none']||0)+1}
console.error(tags);
const keep=all.filter(s=>s.exists&&s.num>0&&(!s.isNonstandard||['Past','Unobtainable','Future'].includes(s.isNonstandard))&&!s.name.includes('-Gmax'));
keep.sort((a,b)=>a.num-b.num||a.name.localeCompare(b.name));
const seen=new Set(),out=[];
for(const s of keep){if(seen.has(s.name))continue;seen.add(s.name);const b=s.baseStats;out.push([s.name,s.num,b.hp,b.atk,b.def,b.spa,b.spd,b.spe])}
console.error('count',out.length,'max num',Math.max(...out.map(x=>x[1])));
for(const n of ['Pikachu','Garchomp','Shedinja','Blissey','Charizard-Mega-X','Ninetales-Alola','Koraidon','Pecharunt','Terapagos-Stellar','Ogerpon-Wellspring']){const r=out.find(x=>x[0]===n);console.error(n,JSON.stringify(r))}
process.stdout.write(JSON.stringify(out));
