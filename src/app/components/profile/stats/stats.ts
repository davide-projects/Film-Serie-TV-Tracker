import { Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
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
}
