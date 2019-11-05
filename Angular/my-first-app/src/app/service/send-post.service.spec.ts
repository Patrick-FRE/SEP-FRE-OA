import { TestBed } from '@angular/core/testing';

import { SendPostService } from './send-post.service';

describe('SendPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendPostService = TestBed.get(SendPostService);
    expect(service).toBeTruthy();
  });
});
