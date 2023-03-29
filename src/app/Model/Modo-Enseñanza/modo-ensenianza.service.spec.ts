import { TestBed } from '@angular/core/testing';

import { ModoEnsenianzaService } from './modo-ensenianza.service';

describe('ModoEnsenianzaService', () => {
  let service: ModoEnsenianzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModoEnsenianzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
