import { HttpClientModule } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { TestAjaxQueryInputModel } from '../model/test/test-ajax-query-input-model';

import { TestService } from './test.service';

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('queryWhere', waitForAsync(() => {
    let postData = new TestAjaxQueryInputModel();
    service.queryWhere(postData).subscribe(
      value => {
        expect(value).toHaveSize(1);
      },
      error => {
        expect(error).toHaveSize(0);
      }
    );
  }));
});
