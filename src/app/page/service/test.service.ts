import { DownloadService } from './../../core/service/download.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { AuthTokenStoreService } from 'src/app/core/store/auth-token-store.service';
import { DefaultAjaxOutputModel } from 'src/app/core/model/default/default-ajax-output-model';
import { TestAjaxQueryOutputModel } from '../model/test/test-ajax-query-output-model';
import { TestAjaxInsertInputModel } from '../model/test/test-ajax-insert-input-model';

class UserModel
{
  Username: string = 'Username';
  Password: string = 'Password';
}

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient : HttpClient,
    private authTokenStoreService : AuthTokenStoreService) { }

  signIn() : Observable<boolean> {
    return this.httpClient
      .post(`${environment.APIEndpoint}/Test/SignIn`, new UserModel(), { responseType: 'text'})
      .pipe(
        tap(value => {
          this.authTokenStoreService.setAuthToken(value);
        }),
        mapTo(true),
        catchError(error => {
          return of(false);
        }));
  }

  Refresh() : Observable<boolean> {
    return this.httpClient
      .post(`${environment.APIEndpoint}/Test/Refresh`, JSON.stringify(this.authTokenStoreService.getAuthToken()),
        {
          headers: new HttpHeaders({
            'Content-Type': 'text/json'
          }),
          responseType: 'text'
        })
      .pipe(
        tap((value : string) => this.authTokenStoreService.setAuthToken(value)),
        mapTo(true),
        catchError(error => {
          this.authTokenStoreService.clear();
          return of(false);
        }));
  }

  authCheck() : Observable<any> {
    return this.httpClient
      .get(`${environment.APIEndpoint}/Test/TestJwtAuthorize`, { responseType: 'text'})
      .pipe(
        mapTo(true),
        catchError(error => {
          return of(false);
        }));
  }

  signOut() : Observable<boolean> {
    this.authTokenStoreService.clear();
    return of(true);
  }

  query() : Observable<DefaultAjaxOutputModel<TestAjaxQueryOutputModel>> {
    return this.httpClient
      .get<DefaultAjaxOutputModel<TestAjaxQueryOutputModel>>(`${environment.APIEndpoint}/Test/Query`);
  }

  insert() : Observable<DefaultAjaxOutputModel<string>> {
    let postData = new TestAjaxInsertInputModel();
    postData.NAME = "C";
    postData.MAKE_DATE = new Date();
    postData.SALE_AMT = -100;
    return this.httpClient
      .post<DefaultAjaxOutputModel<string>>(`${environment.APIEndpoint}/Test/Insert`, postData)
  }
  update() : Observable<DefaultAjaxOutputModel<string>> {
    let postData = new TestAjaxInsertInputModel();
    postData.ROW = 1;
    postData.NAME = "CC";
    postData.MAKE_DATE = new Date();
    postData.SALE_AMT = -1000;
    postData.SALE_DATE = new Date();
    postData.TAX = 999;
    postData.REMARK = "REMARK";
    return this.httpClient
      .post<DefaultAjaxOutputModel<string>>(`${environment.APIEndpoint}/Test/Update`, postData)
  }

  delete() : Observable<DefaultAjaxOutputModel<string>> {
    let postData = 1;
    //let postData = JSON.stringify(1);
    return this.httpClient
      .post<DefaultAjaxOutputModel<string>>(`${environment.APIEndpoint}/Test/Delete`, postData)
  }

  download() : Observable<any> {
    return this.httpClient
      .get(`${environment.APIEndpoint}/Test/Download`);
  }

}
