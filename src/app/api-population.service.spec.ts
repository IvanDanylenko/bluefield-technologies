import { TestBed } from '@angular/core/testing';

import { ApiPopulationService } from './api-population.service';

describe('ApiPopulationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiPopulationService = TestBed.get(ApiPopulationService);
    expect(service).toBeTruthy();
  });
});
