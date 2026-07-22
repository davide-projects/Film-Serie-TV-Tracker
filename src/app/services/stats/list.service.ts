import { Injectable, signal } from '@angular/core';
import type { ListItem } from '../../models/models';

@Injectable({ providedIn: 'root' })
export class List {
  private readonly _items = signal<ListItem[]>([]);

  items() {
    return this._items();
  }
}
