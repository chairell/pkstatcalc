# Pokémon Stat Simulator

A single-page tool for seeing how base stats, IVs, EVs, level and nature combine into a Pokémon's final stats. It uses the main-series formula from Ruby and Sapphire onward.

Live site: https://chairell.github.io/pkstatcalc/

## Features

- **Any Pokémon**: search all 1,025 species plus regional forms and Megas by name or National Dex number. Each shows its types and base stat total.
- **Nature chart**: a 5×5 grid of all 25 natures (rows raise a stat, columns lower one) that shows the effect on the current build and marks the usual picks.
- **Build stats**: set IVs and EVs per stat (with Hyper Training) and watch a stat hexagon and per-stat breakdown bars update. Presets for common EV spreads; the 510 EV cap is enforced.
- **Show the maths**: the formula worked out step by step for any stat.
- **Find an IV**: enter the stat shown in-game and it works out which IVs (0–31) could produce it.
- **Share & export**: copy a link that reopens the exact build, export to Pokémon Showdown format, or paste a Showdown set or whole team to load it.

## Share links

Builds are stored in the URL query string, for example:

```
?p=Garchomp&l=50&n=Jolly&iv=31.31.31.0.31.31&ev=4.252.0.0.0.252
```

`p` species, `l` level, `n` nature, `iv` and `ev` in HP/Atk/Def/SpA/SpD/Spe order, optional `ht` (six 0/1 flags for Hyper Training) and `b` (base stats, only when `p=custom`).

## Files

- `index.html`: the whole app (HTML, CSS and JavaScript, no build step).
- `dex.json`: one row per species or form: `[name, dexNumber, hp, atk, def, spa, spd, spe, types]`.
- `gen-dex.js`: regenerates `dex.json` from the [`@pkmn/dex`](https://www.npmjs.com/package/@pkmn/dex) package (data from Pokémon Showdown).

```sh
npm install @pkmn/dex
node gen-dex.js . > dex.json
```

## Running locally

The page loads `dex.json` with `fetch`, which browsers block for `file://`, so serve the folder: `python3 -m http.server`, then open `http://localhost:8000`.

## Notes

Let's Go Pikachu/Eevee and Legends: Arceus use different stat-training systems, so their numbers won't match. The app deliberately uses no official artwork. Pokémon is a trademark of Nintendo, Creatures Inc. and GAME FREAK inc.; this is an unofficial fan tool.
