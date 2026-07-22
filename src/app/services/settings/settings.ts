import { Injectable, inject } from '@angular/core';
import { Settings as SettingsService } from './settings.service';

@Injectable({ providedIn: 'root' })
export class Settings {
  protected readonly settingsService = inject(SettingsService);
}