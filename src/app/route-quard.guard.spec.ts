import { TestBed } from '@angular/core/testing';

import { RouteQuardGuard } from './route-quard.guard';

describe('RouteQuardGuard', () => {
  let guard: RouteQuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RouteQuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
