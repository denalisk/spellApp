import { TestBed, inject } from '@angular/core/testing';

import { SpellService } from './spell.service';

describe('SpellService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpellService]
    });
  });

  it('should be created', inject([SpellService], (service: SpellService) => {
    expect(service).toBeTruthy();
  }));
});
