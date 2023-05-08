import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diag4Component } from './diag4.component';

describe('Diag4Component', () => {
  let component: Diag4Component;
  let fixture: ComponentFixture<Diag4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Diag4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diag4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
