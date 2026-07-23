import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Meta } from '@angular/platform-browser';
import { Settings as SettingsService } from '../../../services/settings/settings.service';
import { TranslationService } from '../../../services/translation/translation.service';

@Component({
  selector: 'app-settings',
  imports: [FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {
  protected readonly settingsService = inject(SettingsService);
  protected readonly t = inject(TranslationService).t;
  private readonly meta = inject(Meta);

  constructor() {
    this.meta.updateTag({
      name: 'description',
      content: this.t()['metaSettings']
    });
  }
}