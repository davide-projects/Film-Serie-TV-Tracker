import { Injectable, inject, computed } from '@angular/core';
import { List } from './list.service';

@Injectable({ providedIn: 'root' })
export class Stats {
  private readonly listService = inject(List);

  private readonly watchedItems = computed(() =>
    this.listService.items().filter(item => item.status === 'watched')
  );

  totalWatched = computed(() => this.watchedItems().length);

  totalHours = computed(() => {
    const minutes = this.watchedItems()
      .reduce((sum, item) => sum + item.title.duration, 0);
    return Math.round(minutes / 60);
  });

  favoriteGenre = computed(() => {
    const watched = this.watchedItems();
    if (watched.length === 0) return 'N/A';

    const counts: Record<string, number> = {};
    for (const item of watched) {
      const genre = item.title.genre;
      counts[genre] = (counts[genre] ?? 0) + 1;
    }

    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  });
}