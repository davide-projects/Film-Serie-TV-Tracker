import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Settings {
  darkMode = signal<boolean>(false);
  language = signal<'it' | 'en'>('it');

  toggleDarkMode(value: boolean): void {
    this.darkMode.set(value);
  }

  setLanguage(value: 'it' | 'en'): void {
    this.language.set(value);
  }
}