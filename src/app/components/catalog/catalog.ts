import { Component, inject } from '@angular/core';
import { TitleService } from '../../services/title';
import { Title } from '../../models/models';

@Component({
  selector: 'app-catalog',
  imports: [],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog {
  private titleService = inject(TitleService);
  titles: Title[] = this.titleService.getTitles();
}