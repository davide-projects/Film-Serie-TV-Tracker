import { Component, inject, signal, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TitleService } from '../../services/title/title';
import { List } from '../../services/stats/list.service';
import { TranslationService } from '../../services/translation/translation.service';
import { WorkInProgress } from '../work-in-progress/work-in-progress';
import { Title, ListItem } from '../../models/models';

@Component({
  selector: 'app-catalog',
  imports: [WorkInProgress],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog implements OnInit {
  private readonly titleService = inject(TitleService);
  private readonly listService = inject(List);
  private readonly meta = inject(Meta);
  protected readonly translationService = inject(TranslationService);
  protected readonly t = this.translationService.t;
  protected readonly feedback = signal('');

  protected readonly titles = signal<Title[]>([]);

  constructor() {
    this.meta.updateTag({ name: 'description', content: this.t()['metaCatalog'] });
  }

  ngOnInit(): void {
    this.titleService.getTitles().subscribe({
      next: (data) => {
        const userTitles = this.titleService.userTitles();
        this.titles.set([...data, ...userTitles]);
      },
      error: (err) => console.error(err),
    });
  }

  isUserTitle(id: number): boolean {
    return this.titleService.userTitles().some(t => t.id === id);
  }

  saveTitle(movie: Title): void {
    if (this.listService.exists(movie.id)) {
      this.feedback.set(this.t()['duplicateTitle']);
      return;
    }

    const item: ListItem = { title: movie, status: 'to-watch' };
    this.listService.addItem(item);
    this.feedback.set(this.t()['savedOk']);
  }

  deleteTitle(movie: Title): void {
    if (this.listService.exists(movie.id)) {
      this.listService.removeItem(movie.id);
    }
    if (this.isUserTitle(movie.id)) {
      this.titleService.removeTitle(movie.id);
      this.titles.update(t => t.filter(x => x.id !== movie.id));
    }
    this.feedback.set(this.t()['removedOk']);
  }
}