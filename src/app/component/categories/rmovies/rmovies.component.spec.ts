import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmoviesComponent } from './rmovies.component';

describe('RmoviesComponent', () => {
  let component: RmoviesComponent;
  let fixture: ComponentFixture<RmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RmoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
