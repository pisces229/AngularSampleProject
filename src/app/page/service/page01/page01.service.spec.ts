import { TestBed } from '@angular/core/testing';

import { Page01Service } from './page01.service';

describe('Page01Service', () => {
  let service: Page01Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Page01Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
