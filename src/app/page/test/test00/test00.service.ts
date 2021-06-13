
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';

// shared
import {
  CommonAjaxOutputModel,
  CommonAjaxPageModel
} from 'src/app/shared/model/commond-model';
import { EndpointService } from 'src/app/shared/service/endpoint.service';
import { AuthTokenStoreService } from 'src/app/shared/store/auth-token-store.service';
// page
import {
  Test00AjaxQueryOutputModel,
  Test00AjaxInsertInputModel,
  Test00AjaxUpdateInputModel,
  Test00AjaxValueInputModel,
  Test00AjaxValueOutputModel,
  Test00AjaxQueryInputModel
} from './test00-model';

@Injectable()
export class Test00Service {

  constructor(private httpClient: HttpClient,
    private authTokenStoreService: AuthTokenStoreService,
    private endpointService: EndpointService) {
    console.log('Test00Service');
  }

  getValueByValue(value: string): Observable<string> {
    let postData = {
      value: value
    };
    return this.httpClient.get<string>(this.endpointService.defaultUrl('Test/GetValueByValue'), { params: postData });
  }

  postValueByValue(value: string): Observable<string> {
    let postData = JSON.stringify(value);
    return this.httpClient.post(this.endpointService.defaultUrl('Test/PostValueByValue'), postData,
      {
        headers: new HttpHeaders({
          'Content-Type': 'text/json'
        }),
        responseType: 'text'
      });
  }

  getValueByModel(postData: Test00AjaxValueInputModel): Observable<Test00AjaxValueOutputModel> {
    let httpParams = new HttpParams();
    for (let [key, value] of Object.entries(postData)) {
      httpParams = httpParams.set(key, value);
    }
    return this.httpClient.get<Test00AjaxValueOutputModel>(this.endpointService.defaultUrl('Test/getValueByModel'), { params: httpParams });
  }

  postValueByModel(postData: Test00AjaxValueInputModel): Observable<Test00AjaxValueOutputModel> {
    return this.httpClient.post<Test00AjaxValueOutputModel>(this.endpointService.defaultUrl('Test/PostValueByModel'), postData);
  }

  signIn(): Observable<boolean> {
    let postData = { Username: "Username", Password: "Password" };
    return this.httpClient
      .post(this.endpointService.defaultUrl('Test/SignIn'), postData, { responseType: 'text'})
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
      .post(this.endpointService.defaultUrl('Test/Refresh'), postData,
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
      .get(this.endpointService.defaultUrl('Test/ValidateAuth'), { responseType: 'text'})
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

  queryWhere(postData: Test00AjaxQueryInputModel): Observable<CommonAjaxOutputModel<Test00AjaxQueryOutputModel[]>> {
    return this.httpClient
      .get<CommonAjaxOutputModel<Test00AjaxQueryOutputModel[]>>(this.endpointService.defaultUrl('Test/QueryWhere'));
  }

  insert(postData: Test00AjaxInsertInputModel): Observable<CommonAjaxOutputModel<string>> {
    return this.httpClient
      .post<CommonAjaxOutputModel<string>>(this.endpointService.defaultUrl('Test/Insert'), postData);
  }
  update(postData: Test00AjaxUpdateInputModel): Observable<CommonAjaxOutputModel<string>> {
    return this.httpClient
      .post<CommonAjaxOutputModel<string>>(this.endpointService.defaultUrl('Test/Update'), postData);
  }

  delete(postData: string): Observable<CommonAjaxOutputModel<string>> {
    return this.httpClient
      .post<CommonAjaxOutputModel<string>>(this.endpointService.defaultUrl('Test/Delete'), postData,
      {
        headers: new HttpHeaders({
          'Content-Type': 'text/json'
        })
      });
  }

  queryGrid(postData: CommonAjaxPageModel<Test00AjaxQueryInputModel>): Observable<CommonAjaxOutputModel<CommonAjaxPageModel<Test00AjaxQueryOutputModel>>> {
    return this.httpClient
      .post<CommonAjaxOutputModel<CommonAjaxPageModel<Test00AjaxQueryOutputModel>>>(this.endpointService.defaultUrl('Test/QueryGrid'), postData);
  }

  upload(postData: FormData): Observable<CommonAjaxOutputModel<string>> {
    return this.httpClient
      .post<CommonAjaxOutputModel<string>>(this.endpointService.defaultUrl('Test/Upload'), postData);
  }

  uploads(postData: FormData): Observable<CommonAjaxOutputModel<string>> {
    return this.httpClient
      .post<CommonAjaxOutputModel<string>>(this.endpointService.defaultUrl('Test/Uploads'), postData);
  }

  getDownload(postData: any): Observable<HttpResponse<Blob>> {
    return this.httpClient.get(this.endpointService.defaultUrl('Test/GetDownload'), {
      observe: 'response',
      responseType: 'blob'
    });
  }

  postDownload(postData: any): Observable<HttpResponse<Blob>> {
    return this.httpClient.post(this.endpointService.defaultUrl('Test/PostDownload'), postData, {
      observe: 'response',
      responseType: 'blob'
    });
  }

}
