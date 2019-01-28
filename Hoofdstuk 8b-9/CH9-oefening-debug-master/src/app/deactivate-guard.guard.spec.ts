import { TestBed, async, inject } from '@angular/core/testing';

import { CanDeactivateGuard } from './deactivate-guard.guard';

describe('DeactivateGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDeactivateGuard]
    });
  });

  it('should ...', inject([CanDeactivateGuard], (guard: CanDeactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
