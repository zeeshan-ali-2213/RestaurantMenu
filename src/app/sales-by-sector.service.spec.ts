import { TestBed } from '@angular/core/testing';

import { SalesBySectorService } from './sales-by-sector.service';

describe('SalesBySectorService', () => {
  let service: SalesBySectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesBySectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
