import { Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Stats as StatsService } from '../../../services/stats/stats';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
})
export class Stats {
  protected readonly statsService = inject(StatsService);

}
