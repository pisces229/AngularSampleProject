import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { Test02Service } from './test02.service';

describe('Test02Service', () => {
  let service: Test02Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(Test02Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
