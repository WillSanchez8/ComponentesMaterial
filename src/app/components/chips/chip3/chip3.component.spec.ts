import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chip3Component } from './chip3.component';

describe('Chip3Component', () => {
  let component: Chip3Component;
  let fixture: ComponentFixture<Chip3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chip3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chip3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
