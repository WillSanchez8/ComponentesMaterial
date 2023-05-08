import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diag3Component } from './diag3.component';

describe('Diag3Component', () => {
  let component: Diag3Component;
  let fixture: ComponentFixture<Diag3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Diag3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diag3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
