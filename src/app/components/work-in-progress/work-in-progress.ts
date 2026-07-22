import { Component, inject, signal } from '@angular/core';
import { TranslationService } from '../../services/translation/translation.service';

@Component({
  selector: 'app-work-in-progress',
  standalone: true,
  imports: [],
  templateUrl: './work-in-progress.html',
})
export class WorkInProgress {
  protected readonly t = inject(TranslationService).t;
  protected readonly visible = signal(false);

  show(): void {
    this.visible.set(true);
  }

  hide(): void {
    this.visible.set(false);
  }
}
