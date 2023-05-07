import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnTg2Component } from './btn-tg2.component';

describe('BtnTg2Component', () => {
  let component: BtnTg2Component;
  let fixture: ComponentFixture<BtnTg2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnTg2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnTg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
