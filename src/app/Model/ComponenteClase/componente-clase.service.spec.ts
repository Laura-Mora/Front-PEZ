import { TestBed } from '@angular/core/testing';

import { ComponenteClaseService } from './componente-clase.service';

describe('ComponenteClaseService', () => {
  let service: ComponenteClaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponenteClaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
