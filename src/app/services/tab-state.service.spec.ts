import { TestBed, inject } from '@angular/core/testing';

import { TabStateService } from './tab-state.service';

describe('TabStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabStateService]
    });
  });

  it('should be created', inject([TabStateService], (service: TabStateService) => {
    expect(service).toBeTruthy();
  }));
});
