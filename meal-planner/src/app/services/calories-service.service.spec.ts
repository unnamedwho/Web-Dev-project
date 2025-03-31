import { TestBed } from '@angular/core/testing';

import { CaloriesServiceService } from './calories-service.service';

describe('CaloriesServiceService', () => {
  let service: CaloriesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaloriesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
