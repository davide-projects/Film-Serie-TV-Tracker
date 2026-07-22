import { Component, inject, signal, OnInit } from '@angular/core';
import { TitleService } from '../../services/title/title';
import { Title } from '../../models/models';

@Component({
  selector: 'app-catalog',
  imports: [],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog implements OnInit {
  private titleService = inject(TitleService);

  titles = signal<Title[]>([]);

  ngOnInit(): void {
    this.titleService.getTitles().subscribe({
      next: (data) => this.titles.set(data),
      error: (err) => console.error(err),
    });
  }
}