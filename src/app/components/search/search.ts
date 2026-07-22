import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule, TitleCasePipe, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TitleService } from '../../services/title/title';
import { List } from '../../services/list';
import { Title, ListItem } from '../../models/models';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, TitleCasePipe, DecimalPipe],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search implements OnInit {
  private readonly titleService = inject(TitleService);
  private readonly listService = inject(List);

  query = signal<string>('');
  catalog = signal<Title[]>([]);

  ngOnInit(): void {
    this.titleService.getTitles().subscribe({
      next: (data: Title[]) => this.catalog.set(data),
      error: (err: unknown) => console.error('Error loading the catalog:', err)
    });
  }

  searchResults = computed(() => {
    const text = this.query().toLowerCase().trim();
    const allMovies = this.catalog();

    if (!text) {
      return allMovies;
    }

    return allMovies.filter(movie => movie.title.toLowerCase().includes(text));
  });

  addToList(movie: Title, state: 'watched' | 'to-watch' | 'favorite'): void {
    const newItem: ListItem = {
      id: Date.now(),
      title: movie.title,
      state: state,
      releaseDate: new Date().toISOString()
    };

    this.listService.addItem(newItem);
    alert(`"${movie.title}" added to your list!`);
  }
}