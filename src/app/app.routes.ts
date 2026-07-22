import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('./components/home/home')
        .then(m => m.Home)
  },

  {
    path: 'catalog',
    loadComponent: () =>
      import('./components/catalog/catalog')
        .then(m => m.Catalog)
  },

  {
    path: 'catalog/:id',
    loadComponent: () =>
      import('./components/catalog/title-detail/title-detail')
        .then(m => m.TitleDetail)
  },

  {
    path: 'my-list',
    loadComponent: () =>
      import('./components/my-list/my-list')
        .then(m => m.MyList)
  },

  {
    path: 'search',
    loadComponent: () =>
      import('./components/search/search')
        .then(m => m.Search)
  },

  {
    path: 'add',
    loadComponent: () =>
      import('./components/add-title/add-title')
        .then(m => m.AddTitle)
  },

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