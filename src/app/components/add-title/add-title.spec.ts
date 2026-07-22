import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTitle } from './add-title';

describe('AddTitle', () => {
  let component: AddTitle;
  let fixture: ComponentFixture<AddTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTitle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
