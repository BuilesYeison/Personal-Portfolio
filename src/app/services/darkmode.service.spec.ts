import { TestBed } from '@angular/core/testing';

import { DarkmodeService } from './darkmode.service';

describe('DarkmodeService', () => {
  let service: DarkmodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkmodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return dark mode if its true',()=>{
    let darkMode = {
      backgroundColor: "#121314",
      textColor: "#f5f5f5"
    };

    let serviceReturn = service.getMode(true);
    expect(serviceReturn).toEqual(darkMode);
  });

  it('should return light mode if its false', ()=>{
    let lightMode = {
      backgroundColor: "#f5f5f5",
      textColor: "#121314"
    }

    let serviceReturn = service.getMode(false)
    expect(serviceReturn).toEqual(lightMode);
  })
});
