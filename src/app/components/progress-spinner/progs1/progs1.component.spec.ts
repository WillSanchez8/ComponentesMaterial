import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Progs1Component } from './progs1.component';

describe('Progs1Component', () => {
  let component: Progs1Component;
  let fixture: ComponentFixture<Progs1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Progs1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Progs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
