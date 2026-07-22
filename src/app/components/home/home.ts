import { Component, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TranslationService } from '../../services/translation/translation.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly meta = inject(Meta);
  private readonly t = inject(TranslationService).t;

  constructor() {
    this.meta.updateTag({ name: 'description', content: this.t()['metaHome'] });
  }
}
