# Marcin Sztukowski — Portfolio

Osobiste portfolio zbudowane w **Astro** — statyczny generator stron.  
Motyw zielono-czarny, przełącznik dark/light, tłumaczenie PL/EN, w pełni responsywne.

---

## Wymagania systemowe

Przed uruchomieniem projektu upewnij się, że masz zainstalowane:

### 1. Node.js (wymagane: wersja 18 lub nowsza)

Sprawdź czy masz Node:
```bash
node --version
```

Jeśli nie masz lub masz starszą wersję, zainstaluj ze strony:  
👉 https://nodejs.org (pobierz **LTS**)

Albo przez terminal (Linux/macOS):
```bash
# Ubuntu / Debian
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# macOS (przez Homebrew)
brew install node
```

### 2. npm (instaluje się razem z Node.js)

Sprawdź:
```bash
npm --version
```

### 3. Git (opcjonalne, do klonowania repo)

```bash
git --version
```

Jeśli nie masz: https://git-scm.com/downloads

---

## Instalacja i uruchomienie

### Krok 1 — Pobierz projekt

Jeśli masz archiwum ZIP — rozpakuj je do wybranego folderu.

Jeśli klonujesz z GitHuba:
```bash
git clone https://github.com/FBI223/sztukowski.com-website.git
cd sztukowski.com-website
```

### Krok 2 — Zainstaluj zależności

W folderze projektu wykonaj:
```bash
npm install
```

To pobierze Astro i wszystkie potrzebne paczki do folderu `node_modules/`.  
Może potrwać chwilę przy pierwszym uruchomieniu.

### Krok 3 — Uruchom serwer deweloperski

```bash
npm run dev
```

Strona będzie dostępna pod adresem:  
👉 **http://localhost:4321**

Serwer odświeża się automatycznie po każdej zmianie pliku.

---

## Pozostałe komendy

| Komenda | Co robi |
|---|---|
| `npm run dev` | Uruchamia lokalny serwer deweloperski na porcie 4321 |
| `npm run build` | Buduje wersję produkcyjną do folderu `./dist/` |
| `npm run preview` | Podgląd zbudowanej wersji produkcyjnej lokalnie |

### Build produkcyjny (np. przed deploymentem)

```bash
npm run build
npm run preview   # opcjonalnie — sprawdź czy build wygląda dobrze
```

Zawartość folderu `dist/` wrzucasz na serwer / hosting.

---

## Struktura projektu

```
portfolio/
│
├── public/                      ← pliki statyczne (kopiowane 1:1 do dist/)
│   ├── favicon.svg              ← ikona strony (zielone "M")
│   └── cv.pdf                   ← ⚠ TUTAJ wrzuć swoje CV jako PDF
│
├── src/
│   ├── layouts/
│   │   └── Layout.astro         ← wspólny layout wszystkich stron
│   │                               (topbar z nawigacją, footer, <head>,
│   │                                skrypty theme/lang)
│   │
│   ├── styles/
│   │   └── global.css           ← wszystkie style, zmienne CSS, komponenty
│   │                               (dark/light mode, karty, grid, timeline...)
│   │
│   └── pages/                   ← każdy plik = jedna strona URL
│       ├── index.astro          ← /          strona główna, hero, karty nav
│       ├── about.astro          ← /about     profil, edukacja, doświadczenie
│       ├── skills.astro         ← /skills    umiejętności w domenach
│       ├── projects.astro       ← /projects  projekty badawcze i osobiste
│       ├── courses.astro        ← /courses   lista kursów BSc + MSc UJ
│       ├── hobby.astro          ← /hobby     zainteresowania w kartach
│       └── cv.astro             ← /cv        embed PDF + przycisk pobierania
│
├── astro.config.mjs             ← konfiguracja Astro
├── package.json                 ← zależności i skrypty npm
└── README.md                    ← ten plik
```

---

## Jak dodać CV (PDF)

Wrzuć plik PDF do folderu `public/` pod nazwą `cv.pdf`:

```
public/
└── cv.pdf   ← tutaj
```

Strona `/cv` automatycznie go wyświetli w przeglądarce i udostępni przycisk pobierania.

---

## Funkcje strony

### 🌙 Przełącznik motywu (Dark / Light)
- Przycisk **LIGHT / DARK** w prawym rogu topbara
- Wybór zapisywany w `localStorage` — pamiętany po zamknięciu przeglądarki
- Brak flashowania przy ładowaniu (skrypt działa przed renderowaniem)

### 🌐 Zmiana języka (Polski / English)
- Przycisk **POLSKI / ENGLISH** w topbarze
- Tłumaczenie działa w locie bez przeładowania strony
- Każdy element tekstowy ma atrybuty `data-en="..."` i `data-pl="..."`
- Wybór języka zapisywany w `localStorage`

### 📱 Responsywność
- Działa na telefonach, tabletach i desktopach
- Topbar przewijany poziomo na małych ekranach

---

## Kolory — design tokens (global.css)

Wszystkie kolory zdefiniowane jako zmienne CSS w `:root` (dark) i `html[data-theme="light"]` (light).

| Token | Dark | Light | Użycie |
|---|---|---|---|
| `--bg` | `#080c0a` | `#f4f8f5` | tło strony |
| `--bg2` | `#0e1510` | `#e8f0eb` | karty, ramki |
| `--bg3` | `#152019` | `#ddeae1` | elementy zagnieżdżone |
| `--accent` | `#22d97a` | `#0d8a4a` | zielony akcent, aktywne linki |
| `--accent2` | `#16a358` | `#0a6e3b` | ciemniejszy zielony |
| `--text` | `#e4ede8` | `#0e1f14` | główny tekst |
| `--muted` | `#7aaa90` | `#3d6b50` | wygaszony tekst |
| `--border` | rgba zielony | rgba zielony | obramowania kart |

Żeby zmienić kolor akcentu wystarczy edytować `--accent` i `--accent2` w `global.css`.

---

## Jak dodać nową stronę

1. Utwórz plik `src/pages/nazwastrony.astro`
2. Zaimportuj Layout na górze:

```astro
---
import Layout from '../layouts/Layout.astro';
---
<Layout title="Tytuł strony" current="/nazwastrony">
  <!-- treść strony -->
</Layout>
```

3. Dodaj link do nawigacji w `src/layouts/Layout.astro` (tablica `nav`)

---

## Deployment (opcjonalnie)

### Netlify / Vercel (najprostsze)
1. Wrzuć projekt na GitHub
2. Połącz repo z Netlify lub Vercel
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages
Dodaj do `astro.config.mjs`:
```js
export default defineConfig({
  site: 'https://FBI223.github.io',
  base: '/nazwa-repo',
});
```
Następnie uruchom build i wrzuć zawartość `dist/` na branch `gh-pages`.

---

## Technologie

- **Astro** `^4.16` — statyczny generator stron (https://astro.build)
- **JetBrains Mono** — czcionka monospace (nagłówki, nawigacja)
- **Sora** — czcionka sans-serif (treść)
- Czysty CSS (bez Tailwind, bez frameworków CSS)
- Czysty JS (bez React, bez Vue — tylko natywny browser JS)

---

## Autor

**Marcin Sztukowski**  
github.com/FBI223