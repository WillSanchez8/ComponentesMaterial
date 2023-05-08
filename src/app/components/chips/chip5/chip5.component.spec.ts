import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chip5Component } from './chip5.component';

describe('Chip5Component', () => {
  let component: Chip5Component;
  let fixture: ComponentFixture<Chip5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chip5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chip5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
