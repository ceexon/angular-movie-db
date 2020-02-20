import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HeaderComponent} from './header.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {By} from "@angular/platform-browser";

describe('HeaderComponent', () => {
  let fixture; let header;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HeaderComponent,
        SearchBarComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    header = fixture.componentInstance;
  });

  afterEach(() => {
    if (fixture.nativeElement && 'remove' in fixture.nativeElement) {
      (fixture.nativeElement as HTMLElement).remove();
    }
  });

  it('should create the header', () => {
    expect(header).toBeTruthy();
  });

  it('should have an overlay', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.background-overlay').length).toBe(1);
  });
});
