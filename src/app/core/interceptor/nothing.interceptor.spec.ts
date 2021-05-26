import { TestBed } from '@angular/core/testing';

import { NothingInterceptor } from './nothing.interceptor';

describe('NothingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      NothingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: NothingInterceptor = TestBed.inject(NothingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
