import { TestBed, inject } from '@angular/core/testing';

import { JarwisService } from './jarwis.service';

describe('JarwisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JarwisService]
    });
  });

  it('should be created', inject([JarwisService], (service: JarwisService) => {
    expect(service).toBeTruthy();
  }));
});
