import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnTg5Component } from './btn-tg5.component';

describe('BtnTg5Component', () => {
  let component: BtnTg5Component;
  let fixture: ComponentFixture<BtnTg5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnTg5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnTg5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
