import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chk1Component } from './chk1.component';

describe('Chk1Component', () => {
  let component: Chk1Component;
  let fixture: ComponentFixture<Chk1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chk1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chk1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
