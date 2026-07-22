import { Injectable, inject, computed } from '@angular/core';
import { Settings } from '../settings/settings.service';
import { it } from './it';
import { en } from './en';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly settings = inject(Settings);

  readonly t = computed(() =>
    this.settings.language() === 'it' ? it : en
  );

  genreName(name: string): string {
    const tr = this.t();
    const map: Record<string, string> = {
      'sci-fi': tr['genreSciFi'],
      action: tr['genreAction'],
      crime: tr['genreCrime'],
      thriller: tr['genreThriller'],
    };
    return map[name] ?? name;
  }
}
