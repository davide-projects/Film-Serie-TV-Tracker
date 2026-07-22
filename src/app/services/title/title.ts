import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Title } from '../../models/models';

@Injectable({ providedIn: 'root' })
export class TitleService {
  private readonly http = inject(HttpClient);

  getTitles(): Observable<Title[]> {
    return this.http.get<Title[]>("assets/data/titles.json");
  }
}