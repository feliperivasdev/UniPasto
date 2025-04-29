import { TestBed } from '@angular/core/testing';

import { InfoUniversidadesService } from './info-universidades.service';

describe('InfoUniversidadesService', () => {
  let service: InfoUniversidadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoUniversidadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
