import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rbtn2Component } from './rbtn2.component';

describe('Rbtn2Component', () => {
  let component: Rbtn2Component;
  let fixture: ComponentFixture<Rbtn2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rbtn2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rbtn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
