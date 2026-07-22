import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const DARK_MODE_KEY = 'movie-tracker-dark-mode';
const LANGUAGE_KEY = 'movie-tracker-language';

@Injectable({ providedIn: 'root' })
export class Settings {
  private readonly platformId = inject(PLATFORM_ID);

  darkMode = signal<boolean>(this.loadDarkMode());
  language = signal<'it' | 'en'>(this.loadLanguage());

  toggleDarkMode(value: boolean): void {
    this.darkMode.set(value);
    this.saveDarkMode(value);
  }

  setLanguage(value: 'it' | 'en'): void {
    this.language.set(value);
    this.saveLanguage(value);
  }

  private loadDarkMode(): boolean {
    if (!isPlatformBrowser(this.platformId)) return false;
    try {
      const raw = localStorage.getItem(DARK_MODE_KEY);
      return raw === 'true';
    } catch {
      return false;
    }
  }

  private loadLanguage(): 'it' | 'en' {
    if (!isPlatformBrowser(this.platformId)) return 'it';
    try {
      const raw = localStorage.getItem(LANGUAGE_KEY);
      if (raw === 'en' || raw === 'it') return raw;
      return 'it';
    } catch {
      return 'it';
    }
  }

  private saveDarkMode(value: boolean): void {
    if (!isPlatformBrowser(this.platformId)) return;
    try {
      localStorage.setItem(DARK_MODE_KEY, String(value));
    } catch {}
  }

  private saveLanguage(value: 'it' | 'en'): void {
    if (!isPlatformBrowser(this.platformId)) return;
    try {
      localStorage.setItem(LANGUAGE_KEY, value);
    } catch {}
  }
}