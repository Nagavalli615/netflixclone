import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCouorselComponent } from './movie-couorsel.component';

describe('MovieCouorselComponent', () => {
  let component: MovieCouorselComponent;
  let fixture: ComponentFixture<MovieCouorselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCouorselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCouorselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
