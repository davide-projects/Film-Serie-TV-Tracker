import { Component, inject, signal, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Genres } from '../../services/genres/genres.service';
import { List } from '../../services/stats/list.service';
import { TranslationService } from '../../services/translation/translation.service';
import { Title, ListItem } from '../../models/models';

@Component({
  selector: 'app-add-title',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-title.html'
})
export class AddTitle implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  protected readonly genresService = inject(Genres);
  private readonly listService = inject(List);
  protected readonly t = inject(TranslationService).t;
  protected readonly feedback = signal('');

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(1)]],
    type: ['movie', [Validators.required]],
    genre: ['', [Validators.required]],
    year: [2024, [Validators.required, Validators.min(1900), Validators.max(2100)]],
    rate: [5, [Validators.required, Validators.min(0), Validators.max(10)]],
    notes: ['']
  });

  ngOnInit(): void {
    this.genresService.load();
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();

    const newTitle: Title = {
      id: Date.now(),
      title: value.title!,
      type: value.type as 'movie' | 'series',
      genre: value.genre!,
      year: value.year!,
      duration: 0,
      rate: value.rate!
    };

    if (this.listService.exists(newTitle.id)) {
      this.feedback.set(this.t()['duplicateTitle']);
      return;
    }

    const newItem: ListItem = {
      title: newTitle,
      status: 'to-watch',
      personalNote: value.notes || undefined
    };

    this.listService.addItem(newItem);
    this.router.navigate(['/my-list']);
  }
}