import { Component, inject, signal, OnInit } from '@angular/core';
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
  protected readonly t = inject(TranslationService).t;
  protected readonly feedback = signal('');

  titles = signal<Title[]>([]);

  ngOnInit(): void {
    this.titleService.getTitles().subscribe({
      next: (data) => this.titles.set(data),
      error: (err) => console.error(err),
    });
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
}