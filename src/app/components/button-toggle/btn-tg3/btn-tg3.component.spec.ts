import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnTg3Component } from './btn-tg3.component';

describe('BtnTg3Component', () => {
  let component: BtnTg3Component;
  let fixture: ComponentFixture<BtnTg3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnTg3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnTg3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
