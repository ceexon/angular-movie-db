import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePageNavigationComponent } from './movie-page-navigation.component';

describe('MoviePageNavigationComponent', () => {
  let component: MoviePageNavigationComponent;
  let fixture: ComponentFixture<MoviePageNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePageNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePageNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
