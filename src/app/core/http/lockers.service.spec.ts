import { TestBed } from '@angular/core/testing';

import { LockersService } from './lockers.service';

describe('LockersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LockersService = TestBed.get(LockersService);
    expect(service).toBeTruthy();
  });
});
