import { Component, inject, effect, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { TranslationService } from './services/translation/translation.service';
import { Settings as SettingsService } from './services/settings/settings.service';
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
  private readonly settingsService = inject(SettingsService);
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    effect(() => {
      this.title.setTitle(this.t()['appTitle']);
      this.meta.updateTag({ name: 'description', content: this.t()['metaHome'] });
    });

    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        const isDark = this.settingsService.darkMode();
        document.documentElement.dataset['bsTheme'] = isDark ? 'dark' : 'light';
      }
    });
  }
}