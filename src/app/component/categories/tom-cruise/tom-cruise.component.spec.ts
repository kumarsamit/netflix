import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomCruiseComponent } from './tom-cruise.component';

describe('TomCruiseComponent', () => {
  let component: TomCruiseComponent;
  let fixture: ComponentFixture<TomCruiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TomCruiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TomCruiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
