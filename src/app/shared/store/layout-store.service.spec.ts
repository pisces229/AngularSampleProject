import { TestBed } from '@angular/core/testing';

import { LayoutStoreService } from './layout-store.service';

describe('LayoutStoreService', () => {
  let service: LayoutStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
