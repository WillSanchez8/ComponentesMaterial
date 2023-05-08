import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chip2Component } from './chip2.component';

describe('Chip2Component', () => {
  let component: Chip2Component;
  let fixture: ComponentFixture<Chip2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chip2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chip2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
