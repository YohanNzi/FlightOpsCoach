import { TestBed } from '@angular/core/testing';

import { TechMomentsService } from './tech-moments.service';

describe('TechMomentsService', () => {
  let service: TechMomentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechMomentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
