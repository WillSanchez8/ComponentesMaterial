import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pe2Component } from './pe2.component';

describe('Pe2Component', () => {
  let component: Pe2Component;
  let fixture: ComponentFixture<Pe2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pe2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
