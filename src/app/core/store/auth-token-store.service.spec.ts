import { TestBed } from '@angular/core/testing';

import { AuthTokenStoreService } from './auth-token-store.service';

describe('AuthTokenStoreService', () => {
  let service: AuthTokenStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthTokenStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
