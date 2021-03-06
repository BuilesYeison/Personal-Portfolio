import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Portfolio'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Portfolio');
  });

  it(`should be intitialized as light mode'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.isDarkMode).toBeFalsy();
  });

  it(`should call getToggle function'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    spyOn(app,'getToggle');

    const toggle= fixture.debugElement.nativeElement.querySelector('mat-slide-toggle');
    toggle.click();
    fixture.whenStable().then(() => {
      expect(app.getToggle).toHaveBeenCalled();
    });
  });

});
