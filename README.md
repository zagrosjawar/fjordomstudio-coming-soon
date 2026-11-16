# Fjordom Studio – «Kommer snart»

Midlertidig forside for [fjordomstudio.no](https://fjordomstudio.no/), publisert med GitHub Pages.
Én statisk side på norsk bokmål. Ingen rammeverk, ingen eksterne skrifter eller skript, ingen sporing og ingen informasjonskapsler.

## Filer

| Fil | Hva den er |
|---|---|
| `index.html` | Innhold, metadata og bakgrunnsscenen |
| `css/styles.css` | All styling. Fargene er v3.0-tokens øverst i filen |
| `js/main.js` | Gjør ingenting før en bakgrunnsvideo er lagt inn (lager da pauseknappen) |
| `assets/logo-dark-transparent.webp` / `.png` | Godkjent logo med hvitt navn, gjennomsiktig bakgrunn |
| `assets/favicon-32.png`, `-180.png`, `-192.png` | Faneikon og ikon på hjemskjerm |
| `assets/social-share.png` | Bildet som vises når lenken deles (1200 × 630) |
| `assets/figtree-latin.woff2` | Skriften Figtree, lagret lokalt |
| `CNAME` | Domenet for GitHub Pages. **Ikke slett eller endre** |
| `robots.txt` | Lar søkemotorer lese siden |

## Kontaktadresse

«Kontakt oss» er siden eneste lenke. Adressen står ett sted: `href="mailto:…"` i `index.html`.
Bytt den bare til en adresse som faktisk mottar e-post, og send en testmelding etterpå.

## Bakgrunnsbilde og video

Bakgrunnen er nå en **midlertidig scene i ren CSS/SVG** (kveldshimmel, fjell, lys ved vannet, varm lampe).
Den er laget for å holde sidens stemning til et ekte bilde eller en video med rettigheter er på plass.

Når et lisensiert eller eget bilde er klart:

1. Lagre det som `assets/hero-poster.webp` (ca. 1920 px bredt, under 300 KB).
2. Bytt ut `<svg class="scene">…</svg>` i `index.html` med
   `<img class="scene" src="assets/hero-poster.webp" alt="" width="1920" height="1080" />`.
3. Sjekk at overskriften fortsatt er lett å lese. Den mørke toningen (`.hero-shade`) ligger over bildet.

Når en lisensiert video er klar:

1. Lagre den som `assets/hero-workspace.mp4` (H.264, uten lyd, 8–15 sekunder, helst under 3 MB).
2. Fjern kommentartegnene rundt `<video class="hero-video">` i `index.html`.
3. `js/main.js` legger da automatisk til en pauseknapp, og stopper videoen for den som har slått på «redusert bevegelse».

Bruk aldri konseptbildet (med tekst brent inn) som bakgrunn, og ikke vis AI-genererte bilder som om de var Fjordom Studios kontor.

## Før publisering

- [ ] Kontaktadressen er riktig og testet.
- [ ] Siden er sett på mobil, nettbrett og PC.
- [ ] `CNAME` er uendret.
- [ ] Valget om søkemotorer er bevisst: `robots.txt` tillater i dag indeksering.
