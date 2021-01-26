import { TestBed } from '@angular/core/testing';

import { MonthlySaleService } from './monthly-sale.service';

describe('MonthlySaleService', () => {
  let service: MonthlySaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthlySaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
