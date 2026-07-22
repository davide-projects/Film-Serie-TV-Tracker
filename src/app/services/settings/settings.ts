import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Settings as SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './settings.component.html'
})
export class Settings {
  protected readonly settingsService = inject(SettingsService);
}