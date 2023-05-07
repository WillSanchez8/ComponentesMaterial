import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chk2Component } from './chk2.component';

describe('Chk2Component', () => {
  let component: Chk2Component;
  let fixture: ComponentFixture<Chk2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chk2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chk2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
