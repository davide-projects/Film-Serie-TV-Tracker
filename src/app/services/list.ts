import { Injectable, signal } from '@angular/core';
import { ListItem } from '../models/models';

@Injectable({
    providedIn: 'root'
})
export class List {
    private readonly itemsSignal = signal<ListItem[]>([
    ]);

    readonly items = this.itemsSignal.asReadonly();

    changeStatus(id: number, newStatus: 'watched' | 'to-watch' | 'favorite'): void{
        this.itemsSignal.update(list => 
            list.map(item => item.id === id ? {...item, state:newStatus}:item)
        );
    }

    removeItem(id: number): void{
        this.itemsSignal.update(list => list.filter(item => item.id !== id));
    }

    addItem(newItem: ListItem): void{
        this.itemsSignal.update(list => [...list, newItem])
    }
}
