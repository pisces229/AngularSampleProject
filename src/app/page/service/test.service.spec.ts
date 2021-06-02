import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { DefaultInterceptor } from 'src/app/core/interceptor/default.interceptor';
import { TestAjaxQueryInputModel } from '../model/test/test-ajax-query-input-model';

import { TestService } from './test.service';

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: DefaultInterceptor,
          multi: true
        }
      ]
    });
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('signIn', waitForAsync(() => {
    service.signIn().subscribe(
      value => {
        expect(value).toBeTrue();
      },
      error => {
        expect(error).toBeUndefined();
      }
    );
  }));

  it('queryWhere', waitForAsync(() => {
    let postData = new TestAjaxQueryInputModel();
    service.queryWhere(postData).subscribe(
      value => {
        console.log(value.Data);
        expect(value.Success).toBeTrue();
        expect(value.Message).toEqual('Complete');
        expect(value.Data.length).toBeGreaterThan(1);
      },
      error => {
        expect(error).toBeUndefined();
      }
    );
  }));
});
