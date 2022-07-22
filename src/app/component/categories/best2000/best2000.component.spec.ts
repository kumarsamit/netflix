import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Best2000Component } from './best2000.component';

describe('Best2000Component', () => {
  let component: Best2000Component;
  let fixture: ComponentFixture<Best2000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Best2000Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Best2000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
