import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDramaComponent } from './best-drama.component';

describe('BestDramaComponent', () => {
  let component: BestDramaComponent;
  let fixture: ComponentFixture<BestDramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestDramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestDramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
