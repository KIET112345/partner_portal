import { TestBed } from '@angular/core/testing';

import { ParterService } from './parter.service';

describe('ParterService', () => {
  let service: ParterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
