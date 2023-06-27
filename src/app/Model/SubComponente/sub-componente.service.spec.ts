import { TestBed } from '@angular/core/testing';

import { SubComponenteService } from './sub-componente.service';

describe('SubComponenteService', () => {
  let service: SubComponenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubComponenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
