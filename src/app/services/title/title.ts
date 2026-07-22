import { Injectable } from '@angular/core';
import { Title } from '../../models/models';

@Injectable({ providedIn: 'root' })
export class TitleService {
  private titles: Title[] = [
    { id: 1, title: 'Inception', type: 'movie', genre: 'sci-fi', year: 2010, duration: 148, rate: 9.1 },
    { id: 2, title: 'The Dark Knight', type: 'movie', genre: 'action', year: 2008, duration: 152, rate: 9.0 },
    { id: 3, title: 'Pulp Fiction', type: 'movie', genre: 'crime', year: 1994, duration: 154, rate: 8.9 },
    { id: 4, title: 'Interstellar', type: 'movie', genre: 'sci-fi', year: 2014, duration: 169, rate: 8.7 },
    { id: 5, title: 'Parasite', type: 'movie', genre: 'thriller', year: 2019, duration: 132, rate: 8.5 },
  ];

  getTitles(): Title[] {
    return this.titles;
  }
}