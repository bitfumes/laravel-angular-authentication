import { TestBed, inject } from '@angular/core/testing';

import { AfterLoginService } from './after-login.service';

describe('AfterLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AfterLoginService]
    });
  });

  it('should be created', inject([AfterLoginService], (service: AfterLoginService) => {
    expect(service).toBeTruthy();
  }));
});
