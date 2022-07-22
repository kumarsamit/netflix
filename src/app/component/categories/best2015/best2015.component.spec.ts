import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Best2015Component } from './best2015.component';

describe('Best2015Component', () => {
  let component: Best2015Component;
  let fixture: ComponentFixture<Best2015Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Best2015Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Best2015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
