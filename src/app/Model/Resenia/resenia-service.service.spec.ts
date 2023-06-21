import { TestBed } from '@angular/core/testing';

import { ReseniaServiceService } from './resenia-service.service';

describe('ReseniaServiceService', () => {
  let service: ReseniaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReseniaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
