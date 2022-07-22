import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestGrossingComponent } from './highest-grossing.component';

describe('HighestGrossingComponent', () => {
  let component: HighestGrossingComponent;
  let fixture: ComponentFixture<HighestGrossingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighestGrossingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighestGrossingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
