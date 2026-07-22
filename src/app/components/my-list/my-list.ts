import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule, TitleCasePipe, DatePipe, SlicePipe } from '@angular/common';
import { List } from '../../services/list';

@Component({
  selector: 'app-my-list',
  standalone: true,
  imports: [CommonModule, TitleCasePipe, DatePipe, SlicePipe],
  templateUrl: './my-list.html',
  styleUrl: './my-list.scss',
})
export class MyList {
  private readonly list = inject(List);

  activeFilter = signal<'all' | 'watched' | 'to-watch' | 'favorite'>('all');

  allMovies = this.list.items;

  filteredMovies = computed(() => {
    const filter = this.activeFilter();
    const movies = this.allMovies();

    if(filter === 'all'){
      return movies;
    }
    return movies.filter(movie => movie.state === filter);
  });

  setFilter(status: 'all' | 'watched' | 'to-watch' | 'favorite'): void {
    this.activeFilter.set(status);
  }

  changeStatus(id: number, newStatus: 'watched' | 'to-watch' | 'favorite'): void{
    this.list.changeStatus(id, newStatus);
  }

  removeItem(id:number): void{
    this.list.removeItem(id);
  }
}
