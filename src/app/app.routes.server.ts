import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'catalog/:id',
    renderMode: RenderMode.Client
  },
  {
    path: 'catalog',
    renderMode: RenderMode.Client
  },
  {
    path: 'add',
    renderMode: RenderMode.Client
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
