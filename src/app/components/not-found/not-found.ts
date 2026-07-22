import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { TranslationService } from '../../services/translation/translation.service';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFound {
  private readonly meta = inject(Meta);
  private readonly t = inject(TranslationService).t;

  constructor() {
    this.meta.updateTag({ name: 'description', content: this.t()['metaNotFound'] });
  }
}
