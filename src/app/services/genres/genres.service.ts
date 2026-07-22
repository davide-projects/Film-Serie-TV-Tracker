import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Genre } from '../../models/models';

@Injectable({ providedIn: 'root' })
export class Genres {
  private readonly http = inject(HttpClient);

  items = signal<Genre[]>([]);
  loading = signal(false);

  load(): void {
    this.loading.set(true);
    this.http.get<Genre[]>('assets/data/genres.json')
      .subscribe({
        next: data => { this.items.set(data); this.loading.set(false); },
        error: () => this.loading.set(false)
      });
  }
}