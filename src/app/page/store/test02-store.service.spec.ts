import { TestBed } from '@angular/core/testing';

import { Test02StoreService } from './test02-store.service';

describe('Test02StoreService', () => {
  let service: Test02StoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Test02StoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
