import { TestBed } from '@angular/core/testing';

import { IceCreamService } from './ice-cream.service';

describe('IceCreamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IceCreamService = TestBed.get(IceCreamService);
    expect(service).toBeTruthy();
  });
});
