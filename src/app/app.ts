import { Component, inject, effect } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { TranslationService } from './services/translation/translation.service';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly t = inject(TranslationService).t;
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  constructor() {
    effect(() => {
      this.title.setTitle(this.t()['appTitle']);
      this.meta.updateTag({ name: 'description', content: this.t()['metaHome'] });
    });
  }
}