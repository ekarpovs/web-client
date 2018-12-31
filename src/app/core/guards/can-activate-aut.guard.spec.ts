import { TestBed, async, inject } from '@angular/core/testing';

import { CanActivateAutGuard } from './can-activate-aut.guard';

describe('CanActivateAutGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateAutGuard]
    });
  });

  it('should ...', inject([CanActivateAutGuard], (guard: CanActivateAutGuard) => {
    expect(guard).toBeTruthy();
  }));
});
