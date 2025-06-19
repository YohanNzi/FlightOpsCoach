import { TestBed } from '@angular/core/testing';

import { AfEventsService } from './af-events.service';

describe('AfEventsService', () => {
  let service: AfEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
