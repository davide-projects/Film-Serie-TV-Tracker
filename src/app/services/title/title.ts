import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Title } from '../../models/models';

const USER_TITLES_KEY = 'movie-tracker-user-titles';

@Injectable({ providedIn: 'root' })
export class TitleService {
  private readonly http = inject(HttpClient);
  private readonly userTitlesSignal = signal<Title[]>(this.loadUserTitles());

  userTitles(): Title[] {
    return this.userTitlesSignal();
  }

  getTitles(): Observable<Title[]> {
    return this.http.get<Title[]>("assets/data/titles.json");
  }

  generateId(): number {
    const userTitles = this.userTitlesSignal();
    if (userTitles.length === 0) return 6;
    return Math.max(...userTitles.map(t => t.id)) + 1;
  }

  addTitle(title: Title): void {
    this.userTitlesSignal.update(titles => {
      const updated = [...titles, title];
      this.saveUserTitles(updated);
      return updated;
    });
  }

  removeTitle(id: number): void {
    this.userTitlesSignal.update(titles => {
      const updated = titles.filter(t => t.id !== id);
      this.saveUserTitles(updated);
      return updated;
    });
  }

  private loadUserTitles(): Title[] {
    try {
      const raw = localStorage.getItem(USER_TITLES_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  private saveUserTitles(titles: Title[]): void {
    try {
      localStorage.setItem(USER_TITLES_KEY, JSON.stringify(titles));
    } catch {}
  }
}