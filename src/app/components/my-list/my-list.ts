import { Component, inject, signal } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { List } from '../../services/stats/list.service';
import { TranslationService } from '../../services/translation/translation.service';
import { WorkInProgress } from '../work-in-progress/work-in-progress';

@Component({
  selector: 'app-my-list',
  imports: [WorkInProgress],
  templateUrl: './my-list.html',
  styleUrl: './my-list.scss',
})
export class MyList {
  protected readonly listService = inject(List);
  protected readonly translationService = inject(TranslationService);
  protected readonly t = this.translationService.t;
  protected readonly feedback = signal('');
  private readonly meta = inject(Meta);

  constructor() {
    this.meta.updateTag({ name: 'description', content: this.t()['metaMyList'] });
  }

  toggleStatus(id: number, currentStatus: string): void {
    const newStatus = currentStatus === 'watched' ? 'to-watch' : 'watched';
    this.listService.updateStatus(id, newStatus);
    this.feedback.set(this.t()[newStatus === 'watched' ? 'markedWatched' : 'markedToWatch']);
  }

  removeItem(id: number): void {
    this.listService.removeItem(id);
    this.feedback.set(this.t()['removedOk']);
  }
}
