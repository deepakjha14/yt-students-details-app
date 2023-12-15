import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { authGuardGuard } from './auth-guard.guard';

describe('authGuardGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
