import { Component, inject, effect, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Settings as SettingsService } from '../../../services/settings/settings.service';

@Component({
  selector: 'app-settings',
  imports: [FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {
  protected readonly settingsService = inject(SettingsService);
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    effect(() => {
      const isDark = this.settingsService.darkMode();

      if (isPlatformBrowser(this.platformId)) {
        document.documentElement.dataset['bsTheme'] = isDark ? 'dark' : 'light';
      }
    });
  }
}