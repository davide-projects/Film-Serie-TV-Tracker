import { Component, inject, signal } from '@angular/core';
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
  protected readonly t = inject(TranslationService).t;
  protected readonly feedback = signal('');

  removeItem(id: number): void {
    this.listService.removeItem(id);
    this.feedback.set(this.t()['removedOk']);
  }
}
