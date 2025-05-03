import { TestBed } from '@angular/core/testing';

import { PlanesEstudioService } from './planes-estudio.service';

describe('PlanesEstudioService', () => {
  let service: PlanesEstudioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanesEstudioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
