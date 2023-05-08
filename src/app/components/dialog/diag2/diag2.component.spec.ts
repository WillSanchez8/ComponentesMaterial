import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diag2Component } from './diag2.component';

describe('Diag2Component', () => {
  let component: Diag2Component;
  let fixture: ComponentFixture<Diag2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Diag2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diag2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
