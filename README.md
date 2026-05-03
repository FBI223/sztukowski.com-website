# Marcin Sztukowski — Portfolio

Projekt Astro: portfolio osobiste z layoutem, globalnymi stylami i wszystkimi stronami.

## Struktura projektu

```
portfolio/
├── public/
│   ├── favicon.svg          ← favicon (zielone "M")
│   └── cv.pdf               ← TUTAJ wrzuć swoje CV jako PDF
│
├── src/
│   ├── layouts/
│   │   └── Layout.astro     ← wspólny layout: topbar + footer + <head>
│   │
│   ├── styles/
│   │   └── global.css       ← wszystkie zmienne CSS, kolory, komponenty
│   │
│   └── pages/
│       ├── index.astro      ← strona główna / hero
│       ├── about.astro      ← bio, edukacja, praca
│       ├── skills.astro     ← umiejętności pogrupowane w domeny
│       ├── projects.astro   ← projekty z badgami i tagami
│       ├── courses.astro    ← lista kursów BSc + MSc
│       ├── hobby.astro      ← karty z hobby
│       └── cv.astro         ← embed PDF + download
│
├── astro.config.mjs
└── package.json
```

## Uruchomienie

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # build do ./dist/
npm run preview    # podgląd buildu
```

## Kolory (design tokens w global.css)

| Token       | Wartość     | Użycie                          |
|-------------|-------------|---------------------------------|
| `--bg`      | `#080c0a`   | tło strony                      |
| `--bg2`     | `#0e1510`   | karty / ramki                   |
| `--bg3`     | `#152019`   | zagnieżdżone elementy           |
| `--accent`  | `#22d97a`   | zielony akcent, linki aktywne   |
| `--accent2` | `#16a358`   | ciemniejszy zielony             |
| `--text`    | `#e4ede8`   | główny tekst                    |
| `--muted`   | `#7aaa90`   | wygaszony tekst                 |
| `--border`  | rgba green  | obramowania kart                |

## Jak dodać CV PDF

Wrzuć plik `cv.pdf` do folderu `public/`:

```
public/cv.pdf
```

Strona `/cv` automatycznie go wyświetli i umożliwi pobieranie.
