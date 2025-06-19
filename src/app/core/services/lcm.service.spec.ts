import { TestBed } from '@angular/core/testing';

import { LcmService } from './lcm.service';

describe('LcmService', () => {
  let service: LcmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LcmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
