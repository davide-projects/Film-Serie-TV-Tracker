import { Routes } from '@angular/router';

export const routes: Routes = [

  // ── HOME ──────────────────────────────
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home')
        .then(m => m.Home)
  },

  // ── CATALOG ───────────────────────────
  {
    path: 'catalog',
    loadComponent: () =>
      import('./components/catalog/catalog')
        .then(m => m.Catalog)
  },

  // ── TITLE DETAIL — dynamic route :id ──
  {
    path: 'catalog/:id',
    loadComponent: () =>
      import('./components/catalog/title-detail/title-detail')
        .then(m => m.TitleDetail)
  },

  // ── MY LIST ───────────────────────────
  {
    path: 'my-list',
    loadComponent: () =>
      import('./components/my-list/my-list')
        .then(m => m.MyList)
  },

  // ── SEARCH ────────────────────────────
  {
    path: 'search',
    loadComponent: () =>
      import('./components/search/search')
        .then(m => m.Search)
  },

  // ── ADD TITLE ─────────────────────────
  {
    path: 'add',
    loadComponent: () =>
      import('./components/add-title/add-title')
        .then(m => m.AddTitle)
  },

  // ── PROFILE — with child routes ───────
  {
    path: 'profile',
    loadComponent: () =>
      import('./components/profile/profile')
        .then(m => m.Profile),
    children: [
      {
        path: '',
        redirectTo: 'stats',
        pathMatch: 'full'
      },
      {
        path: 'stats',
        loadComponent: () =>
          import('./components/profile/stats/stats')
            .then(m => m.Stats)
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./components/profile/settings/settings')
            .then(m => m.Settings)
      }
    ]
  },

  // ── 404 — ALWAYS last ──────────────────
  {
    path: '**',
    loadComponent: () =>
      import('./components/not-found/not-found')
        .then(m => m.NotFound)
  }
];