import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PupularKidsComponent } from './pupular-kids.component';

describe('PupularKidsComponent', () => {
  let component: PupularKidsComponent;
  let fixture: ComponentFixture<PupularKidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PupularKidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PupularKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
