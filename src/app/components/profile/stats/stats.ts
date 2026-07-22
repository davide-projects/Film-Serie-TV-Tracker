import { Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { Stats as StatsService } from '../../../services/stats/stats';
import { TranslationService } from '../../../services/translation/translation.service';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
})
export class Stats {
  protected readonly statsService = inject(StatsService);
  protected readonly t = inject(TranslationService).t;
  private readonly meta = inject(Meta);

  constructor() {
    this.meta.updateTag({ name: 'description', content: this.t()['metaStats'] });
  }
}
