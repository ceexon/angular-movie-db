import {TestBed, async, inject} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {SearchBarComponent} from './search-bar.component';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {Router} from '@angular/router';

describe('SearchBarComponent', () => {
  let fixture; let searchBar;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
      ],
      declarations: [
        SearchBarComponent,
        SearchBarComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    searchBar = fixture.componentInstance;
  });

  afterEach(() => {
    if (fixture.nativeElement && 'remove' in fixture.nativeElement) {
      (fixture.nativeElement as HTMLElement).remove();
    }
  });

  it('should create the searchBar', () => {
    expect(searchBar).toBeTruthy();
  });

  it('should have an search Button', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(`.search-btn`).textContent).toBe(' Search ');
  });

  it('should have an search input', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll(`[test-data-target='search-bar']`).length).toBe(1);

  });

  it('should navigate', () => {
    spyOn(searchBar, 'onSubmit');
    const form = fixture.debugElement.query(By.css('form'));
    const input = fixture.debugElement.query(By.css(`[test-data-target='search-bar']`)).nativeElement as HTMLInputElement;
    form.triggerEventHandler('submit', null);
    fixture.detectChanges();
    input.value = 'foo';
    input.dispatchEvent(new Event('input'));
    expect(searchBar.onSubmit).toHaveBeenCalled();
  });
});
