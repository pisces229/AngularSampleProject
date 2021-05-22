import { TestBed } from '@angular/core/testing';

import { Page02Service } from './page02.service';

describe('Page02Service', () => {
  let service: Page02Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Page02Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
