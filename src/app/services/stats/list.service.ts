import { Injectable, signal } from '@angular/core';
import type { ListItem } from '../../models/models';

const STORAGE_KEY = 'movie-tracker-list';

@Injectable({ providedIn: 'root' })
export class List {
  private readonly _items = signal<ListItem[]>(this.load());

  items() {
    return this._items();
  }

  exists(id: number): boolean {
    return this._items().some(item => item.title.id === id);
  }

  addItem(item: ListItem): void {
    this._items.update(items => {
      const updated = [...items, item];
      this.save(updated);
      return updated;
    });
  }

  removeItem(id: number): void {
    this._items.update(items => {
      const updated = items.filter(item => item.title.id !== id);
      this.save(updated);
      return updated;
    });
  }

  private load(): ListItem[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  private save(items: ListItem[]): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }
}
