import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnTg1Component } from './btn-tg1.component';

describe('BtnTg1Component', () => {
  let component: BtnTg1Component;
  let fixture: ComponentFixture<BtnTg1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnTg1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnTg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
