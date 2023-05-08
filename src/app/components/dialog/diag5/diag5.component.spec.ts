import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diag5Component } from './diag5.component';

describe('Diag5Component', () => {
  let component: Diag5Component;
  let fixture: ComponentFixture<Diag5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Diag5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diag5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
