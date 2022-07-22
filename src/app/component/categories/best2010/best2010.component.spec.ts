import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Best2010Component } from './best2010.component';

describe('Best2010Component', () => {
  let component: Best2010Component;
  let fixture: ComponentFixture<Best2010Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Best2010Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Best2010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
