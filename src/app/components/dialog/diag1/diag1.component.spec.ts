import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diag1Component } from './diag1.component';

describe('Diag1Component', () => {
  let component: Diag1Component;
  let fixture: ComponentFixture<Diag1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Diag1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diag1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
