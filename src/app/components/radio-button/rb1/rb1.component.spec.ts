import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rb1Component } from './rb1.component';

describe('Rb1Component', () => {
  let component: Rb1Component;
  let fixture: ComponentFixture<Rb1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rb1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rb1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
