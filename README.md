# Pokémon Stat Simulator

A single-page tool for seeing how base stats, IVs, EVs, level and nature combine into a Pokémon's final stats. It uses the main-series formula from Ruby and Sapphire onward.

## Tabs

- **Nature chart**: a 5×5 grid of all 25 natures (rows raise a stat, columns lower one) that shows the effect on the current build and marks common picks.
- **Build stats**: pick any Pokémon or form, set IVs and EVs per stat (with Hyper Training), and watch a stat hexagon and per-stat breakdown bars update. Presets for common EV spreads; the 510 EV cap is enforced.
- **Show the maths**: the formula worked out step by step for any stat.
- **Find an IV**: enter the stat shown in-game and it works out which IVs (0–31) could produce it.

## Files

- `index.html`: the whole app (HTML, CSS and JavaScript, no build step).
- `dex.json`: base stats for all 1,025 species plus regional forms and Megas, as `[name, dexNumber, hp, atk, def, spa, spd, spe]`.
- `gen-dex.js`: script that regenerates `dex.json` from the [`@pkmn/dex`](https://www.npmjs.com/package/@pkmn/dex) package (data from Pokémon Showdown).

To regenerate the data:

```sh
npm install @pkmn/dex
node gen-dex.js . > dex.json
```

## Running it

Open it through any static web server (the page loads `dex.json` with `fetch`, which browsers block for `file://`). For example `python3 -m http.server` and visit `http://localhost:8000`, or host it with GitHub Pages.

## Notes

Let's Go Pikachu/Eevee and Legends: Arceus use different stat-training systems, so their numbers won't match. Pokémon is a trademark of Nintendo, Creatures Inc. and GAME FREAK inc.; this is an unofficial fan tool.
