import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pe1Component } from './pe1.component';

describe('Pe1Component', () => {
  let component: Pe1Component;
  let fixture: ComponentFixture<Pe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pe1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
