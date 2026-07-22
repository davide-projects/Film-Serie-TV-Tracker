# 🎬 MovieTracker — Film e Serie TV Tracker

Applicazione Angular standalone per tenere traccia di film e serie TV.  
Crea la tua lista personale, catalogali per genere, valutali e ottieni statistiche di visione.

## Stack tecnologico

| Strato        | Tecnologia                        |
|---------------|-----------------------------------|
| Framework     | Angular 22 (standalone components)|
| Linguaggio    | TypeScript 6                      |
| Stile         | Bootstrap 5.3 + SCSS              |
| Server-side   | Angular SSR (Express)             |
| Test          | Vitest + Angular Testing Library  |
| Linter        | Prettier                          |

## Funzionalità

- **Catalogo** — Esplora film e serie TV con dati da file JSON locale
- **Ricerca** — Cerca titoli per nome con risultati in tempo reale
- **Lista personale** — Aggiungi, rimuovi e cambia stato (visto / da vedere / preferito)
- **Statistiche** — Ore totali, titoli visti, genere preferito
- **Aggiunta titoli** — Inserisci nuovi titoli tramite form validato
- **Internazionalizzazione** — Supporto italiano / inglese
- **Tema scuro** — Toggle dark mode con persistenza locale
- **SEO** — Meta description dinamiche, tag semantici HTML5

## Struttura del progetto

```
src/
├── app/
│   ├── components/
│   │   ├── add-title/          # Form aggiunta titolo
│   │   ├── catalog/            # Catalogo titoli
│   │   │   └── title-detail/   # Dettaglio singolo titolo
│   │   ├── footer/             # Footer globale
│   │   ├── home/               # Home page
│   │   ├── my-list/            # Lista personale
│   │   ├── not-found/          # Pagina 404
│   │   ├── profile/            # Layout profilo
│   │   │   ├── settings/       # Impostazioni (tema, lingua)
│   │   │   └── stats/          # Statistiche utente
│   │   ├── search/             # Ricerca titoli
│   │   └── work-in-progress/   # Componente WIP generico
│   ├── models/
│   │   └── models.ts           # Interfacce (Title, ListItem, Genre)
│   ├── services/
│   │   ├── genres/             # Caricamento generi da JSON
│   │   ├── settings/           # Tema scuro e lingua (persistiti)
│   │   ├── stats/              # Statistiche e lista personale
│   │   ├── title/              # Caricamento titoli e gestione utente
│   │   └── translation/        # Internazionalizzazione (it/en)
│   ├── app.ts                  # Root component
│   ├── app.config.ts           # Providers globali
│   └── app.routes.ts           # Definizione rotte
├── public/assets/data/
│   ├── titles.json             # Dataset titoli predefiniti
│   └── genres.json             # Dataset generi
├── index.html
└── styles.scss
```

## Rotte

| Percorso           | Componente       | Descrizione               |
|--------------------|------------------|---------------------------|
| `/`                | `Home`           | Home page                 |
| `/catalog`         | `Catalog`        | Catalogo titoli           |
| `/catalog/:id`     | `TitleDetail`    | Dettaglio titolo          |
| `/my-list`         | `MyList`         | Lista personale           |
| `/search`          | `Search`         | Ricerca titoli            |
| `/add`             | `AddTitle`       | Aggiungi titolo           |
| `/profile`         | `Profile`        | Profilo (layout)          |
| `/profile/stats`   | `Stats`          | Statistiche utente        |
| `/profile/settings`| `Settings`       | Impostazioni              |
| `**`               | `NotFound`       | Pagina 404                |

## Prerequisiti

- Node.js >= 22.22.3
- npm >= 11

## Installazione

```bash
npm install
```

## Sviluppo

Avvia il server di sviluppo:

```bash
npm start
# oppure
ng serve
```

Apri `http://localhost:4200/`. L'applicazione si ricarica automaticamente a ogni modifica.

## Build

```bash
npm run build
```

L'output di produzione si trova in `dist/Film-Servietv-Tracker/`.

## Test

```bash
npm test
# oppure
ng test
```

## Best practice applicate

- `readonly` su tutte le proprietà non riassegnate (computed, signal, FormGroup)
- `private readonly` con nomi descrittivi (no underscore prefix)
- `protected readonly` per proprietà accessibili dai template
- Servizi injectati via `inject()` (no constructor injection)
- Signal-based reactivity (`signal`, `computed`, `effect`)
- Lazy loading di tutte le route
- i18n con mappe chiave/valore per italiano e inglese
- Tag semantici HTML5 (`<section>`, `<article>`, `<nav>`, `<fieldset>`, `<address>`, ecc.)
- Meta description dinamiche su ogni pagina
- `scope` su `<th>` per accessibilità tabelle
- `aria-*` attributi per screen reader
