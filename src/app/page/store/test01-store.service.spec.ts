import { TestBed } from '@angular/core/testing';

import { Test01StoreService } from './test01-store.service';

describe('Test01StoreService', () => {
  let service: Test01StoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Test01StoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
