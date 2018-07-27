import { TestBed, inject } from '@angular/core/testing';

import { UserSpellService } from './user-spell.service';

describe('UserSpellService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserSpellService]
    });
  });

  it('should be created', inject([UserSpellService], (service: UserSpellService) => {
    expect(service).toBeTruthy();
  }));
});
