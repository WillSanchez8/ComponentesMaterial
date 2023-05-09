import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rbtn1Component } from './rbtn1.component';

describe('Rbtn1Component', () => {
  let component: Rbtn1Component;
  let fixture: ComponentFixture<Rbtn1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rbtn1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rbtn1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
