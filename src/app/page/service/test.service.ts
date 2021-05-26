
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';

import { AuthTokenStoreService } from 'src/app/core/store/auth-token-store.service';
import { EndpointUtilService } from 'src/app/core/util/endpoint-util.service';
import { DefaultAjaxOutputModel } from 'src/app/core/model/default/default-ajax-output-model';
import { TestAjaxQueryOutputModel } from '../model/test/test-ajax-query-output-model';
import { TestAjaxInsertInputModel } from '../model/test/test-ajax-insert-input-model';
import { TestAjaxUpdateInputModel } from '../model/test/test-ajax-update-input-model';
import { TestAjaxValueInputModel } from '../model/test/test-ajax-value-input-model';
import { TestAjaxValueOutputModel } from '../model/test/test-ajax-value-output-model';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient: HttpClient,
    private authTokenStoreService: AuthTokenStoreService,
    private endpointUtilService: EndpointUtilService) { }

  getValueByValue(value: string): Observable<string> {
    let postData = {
      value: value
    };
    return this.httpClient.get<string>(this.endpointUtilService.defaultUrl('Test/GetValueByValue'), { params: postData });
  }

  postValueByValue(value: string): Observable<string> {
    let postData = JSON.stringify(value);
    return this.httpClient.post(this.endpointUtilService.defaultUrl('Test/PostValueByValue'), postData,
      {
        headers: new HttpHeaders({
          'Content-Type': 'text/json'
        }),
        responseType: 'text'
      });
  }

  getValueByModel(postData: TestAjaxValueInputModel): Observable<TestAjaxValueOutputModel> {
    let httpParams = new HttpParams();
    for (let [key, value] of Object.entries(postData)) {
      httpParams = httpParams.set(key, value);
    }
    return this.httpClient.get<TestAjaxValueOutputModel>(this.endpointUtilService.defaultUrl('Test/getValueByModel'), { params: httpParams });
  }

  postValueByModel(postData: TestAjaxValueInputModel): Observable<TestAjaxValueOutputModel> {
    return this.httpClient.post<TestAjaxValueOutputModel>(this.endpointUtilService.defaultUrl('Test/PostValueByModel'), postData);
  }

  signIn(): Observable<boolean> {
    let postData = { Username: "Username", Password: "Password" };
    return this.httpClient
      .post(this.endpointUtilService.defaultUrl('Test/SignIn'), postData, { responseType: 'text'})
      .pipe(
        tap(value => {
          this.authTokenStoreService.setAuthToken(value);
        }),
        mapTo(true),
        catchError(error => {
          return of(false);
        }));
  }

  Refresh(): Observable<boolean> {
    let postData = JSON.stringify(this.authTokenStoreService.getAuthToken());
    return this.httpClient
      .post(this.endpointUtilService.defaultUrl('Test/Refresh'), postData,
        {
          headers: new HttpHeaders({
            'Content-Type': 'text/json'
          }),
          responseType: 'text'
        })
      .pipe(
        tap((value: string) => this.authTokenStoreService.setAuthToken(value)),
        mapTo(true),
        catchError(error => {
          this.authTokenStoreService.clear();
          return of(false);
        }));
  }

  validateAuth(): Observable<any> {
    return this.httpClient
      .get(this.endpointUtilService.defaultUrl('Test/ValidateAuth'), { responseType: 'text'})
      .pipe(
        mapTo(true),
        catchError(error => {
          return of(false);
        }));
  }

  signOut(): Observable<boolean> {
    this.authTokenStoreService.clear();
    return of(true);
  }

  query(): Observable<DefaultAjaxOutputModel<TestAjaxQueryOutputModel>> {
    return this.httpClient
      .get<DefaultAjaxOutputModel<TestAjaxQueryOutputModel>>(this.endpointUtilService.defaultUrl('Test/Query'));
  }

  insert(postData: TestAjaxInsertInputModel): Observable<DefaultAjaxOutputModel<string>> {
    return this.httpClient
      .post<DefaultAjaxOutputModel<string>>(this.endpointUtilService.defaultUrl('Test/Insert'), postData)
  }
  update(postData: TestAjaxUpdateInputModel): Observable<DefaultAjaxOutputModel<string>> {
    return this.httpClient
      .post<DefaultAjaxOutputModel<string>>(this.endpointUtilService.defaultUrl('Test/Update'), postData)
  }

  delete(postData: number): Observable<DefaultAjaxOutputModel<string>> {
    return this.httpClient
      .post<DefaultAjaxOutputModel<string>>(this.endpointUtilService.defaultUrl('Test/Delete'), postData)
  }

  upload(postData: FormData): Observable<DefaultAjaxOutputModel<string>> {
    return this.httpClient
      .post<DefaultAjaxOutputModel<string>>(this.endpointUtilService.defaultUrl('Test/Upload'), postData)
  }

  uploads(postData: FormData): Observable<DefaultAjaxOutputModel<string>> {
    return this.httpClient
      .post<DefaultAjaxOutputModel<string>>(this.endpointUtilService.defaultUrl('Test/Uploads'), postData)
  }

  getDownload(postData: any): Observable<HttpResponse<Blob>> {
    return this.httpClient.get(this.endpointUtilService.defaultUrl('Test/GetDownload'), {
      observe: 'response',
      responseType: 'blob'
    });
  }

  postDownload(postData: any): Observable<HttpResponse<Blob>> {
    return this.httpClient.post(this.endpointUtilService.defaultUrl('Test/PostDownload'), postData, {
      observe: 'response',
      responseType: 'blob'
    });
  }

}
