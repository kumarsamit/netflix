import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BradPittComponent } from './brad-pitt.component';

describe('BradPittComponent', () => {
  let component: BradPittComponent;
  let fixture: ComponentFixture<BradPittComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BradPittComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BradPittComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
