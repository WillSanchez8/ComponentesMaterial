import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chk3Component } from './chk3.component';

describe('Chk3Component', () => {
  let component: Chk3Component;
  let fixture: ComponentFixture<Chk3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chk3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chk3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
