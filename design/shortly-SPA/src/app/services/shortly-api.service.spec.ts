import { TestBed } from '@angular/core/testing';

import { ShortlyApiService } from './shortly-api.service';

describe('ShortlyApiService', () => {
  let service: ShortlyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortlyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
