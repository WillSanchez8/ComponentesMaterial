import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnTg4Component } from './btn-tg4.component';

describe('BtnTg4Component', () => {
  let component: BtnTg4Component;
  let fixture: ComponentFixture<BtnTg4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnTg4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnTg4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
