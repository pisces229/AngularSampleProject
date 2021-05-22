import { TestBed } from '@angular/core/testing';

import { Page01StoreService } from './page01-store.service';

describe('Page01StoreService', () => {
  let service: Page01StoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Page01StoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
