import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chip7Component } from './chip7.component';

describe('Chip7Component', () => {
  let component: Chip7Component;
  let fixture: ComponentFixture<Chip7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chip7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chip7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
