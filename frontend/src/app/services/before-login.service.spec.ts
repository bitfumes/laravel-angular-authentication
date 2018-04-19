import { TestBed, inject } from '@angular/core/testing';

import { BeforeLoginService } from './before-login.service';

describe('BeforeLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeforeLoginService]
    });
  });

  it('should be created', inject([BeforeLoginService], (service: BeforeLoginService) => {
    expect(service).toBeTruthy();
  }));
});
