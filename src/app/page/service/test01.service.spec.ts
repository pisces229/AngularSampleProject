import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { Test01Service } from './test01.service';

describe('Test01Service', () => {
  let service: Test01Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(Test01Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
