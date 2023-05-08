import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diag6Component } from './diag6.component';

describe('Diag6Component', () => {
  let component: Diag6Component;
  let fixture: ComponentFixture<Diag6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Diag6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diag6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
