import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule, TitleCasePipe, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Meta } from '@angular/platform-browser';
import { TitleService } from '../../services/title/title';
import { List } from '../../services/stats/list.service';
import { TranslationService } from '../../services/translation/translation.service';
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
  private readonly meta = inject(Meta);
  protected readonly t = inject(TranslationService).t;

  readonly query = signal<string>('');
  readonly catalog = signal<Title[]>([]);
  protected readonly feedback = signal('');

  constructor() {
    this.meta.updateTag({ name: 'description', content: this.t()['metaSearch'] });
  }

  ngOnInit(): void {
    this.titleService.getTitles().subscribe({
      next: (data: Title[]) => this.catalog.set(data),
      error: () => this.feedback.set(this.t()['genericError'])
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

  addToList(movie: Title, status: 'watched' | 'to-watch' | 'favorite'): void {
    const newItem: ListItem = {
      title: movie,
      status: status,
    };

    this.listService.addItem(newItem);
    this.feedback.set(this.t()['savedOk']);
  }
}