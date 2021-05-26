import { TestBed } from '@angular/core/testing';

import { EndpointUtilService } from './endpoint-util.service';

describe('EndpointUtilService', () => {
  let service: EndpointUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndpointUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
