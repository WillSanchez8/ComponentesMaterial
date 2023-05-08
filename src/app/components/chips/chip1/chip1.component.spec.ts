import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chip1Component } from './chip1.component';

describe('Chip1Component', () => {
  let component: Chip1Component;
  let fixture: ComponentFixture<Chip1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chip1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chip1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
