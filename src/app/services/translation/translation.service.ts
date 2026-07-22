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
}
