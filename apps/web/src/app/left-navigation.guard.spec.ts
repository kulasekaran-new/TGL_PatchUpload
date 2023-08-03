import { TestBed } from '@angular/core/testing';

import { LeftNavigationGuard } from './left-navigation.guard';

describe('LeftNavigationGuard', () => {
  let guard: LeftNavigationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LeftNavigationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
