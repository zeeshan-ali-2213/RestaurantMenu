import { TestBed } from '@angular/core/testing';

import { AnnualSaleService } from './annual-sale.service';

describe('AnnualSaleService', () => {
  let service: AnnualSaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnualSaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
