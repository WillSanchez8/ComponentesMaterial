import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chip6Component } from './chip6.component';

describe('Chip6Component', () => {
  let component: Chip6Component;
  let fixture: ComponentFixture<Chip6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chip6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chip6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
