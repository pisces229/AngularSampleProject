
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, finalize, map, mapTo, tap } from 'rxjs/operators';

// shared
import {
  CommonAjaxOutputModel,
  CommonAjaxPageModel
} from 'src/app/shared/model/common-model';
import { EndpointService } from 'src/app/shared/service/endpoint.service';
import { AuthTokenStoreService } from 'src/app/shared/store/auth-token-store.service';
// page
import {
  TestAjaxQueryOutputModel,
  TestAjaxInsertInputModel,
  TestAjaxUpdateInputModel,
  TestAjaxValueInputModel,
  TestAjaxValueOutputModel,
  TestAjaxQueryInputModel
} from './test-model';

@Injectable()
export class TestService {

  private controller = 'Test';

  constructor(private httpClient: HttpClient,
    private authTokenStoreService: AuthTokenStoreService,
    private endpointService: EndpointService) {
  }

  getValueByValue(value: string): Observable<string> {
    let postData = {
      value: value
    };
    return this.httpClient.get<string>(this.endpointService.defaultUrl(`${this.controller}/GetValueByValue`),
    { params: postData });
  }

  postValueByValue = (value: string) =>
    this.httpClient.post(this.endpointService.defaultUrl(`${this.controller}/PostValueByValue`),
    JSON.stringify(value),
      {
        headers: new HttpHeaders({
          'Content-Type': 'text/json'
        }),
        responseType: 'text'
      });

  getValueByModel(postData: TestAjaxValueInputModel): Observable<TestAjaxValueOutputModel> {
    let httpParams = new HttpParams();
    for (let [key, value] of Object.entries(postData)) {
      httpParams = httpParams.set(key, value);
    }
    return this.httpClient.get<TestAjaxValueOutputModel>(
      this.endpointService.defaultUrl(`${this.controller}/getValueByModel`), { params: httpParams });
  }

  postValueByModel = (postData: TestAjaxValueInputModel) =>
    this.httpClient.post<TestAjaxValueOutputModel>(
      this.endpointService.defaultUrl(`${this.controller}/PostValueByModel`), postData);

  signIn = () =>
    this.httpClient.post<CommonAjaxOutputModel<string>>(this.endpointService.defaultUrl(`Login/SignIn`),
      { Username: "Username", Password: "Password" })
      .pipe(
        map(value => {
          console.log(value);
          if (value.Success) {
            this.authTokenStoreService.setAuthToken(value.Data);
          }
          return value.Success;
        }),
        catchError(error => {
          return of(false);
        }));

  Refresh = () =>
    this.httpClient.post(this.endpointService.defaultUrl(`Login/Refresh`),
      JSON.stringify(this.authTokenStoreService.getAuthToken()),
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

  signOut = () =>
    this.httpClient.post(this.endpointService.defaultUrl(`Login/signOut`),
      JSON.stringify(this.authTokenStoreService.getAuthToken()),
        {
          headers: new HttpHeaders({
            'Content-Type': 'text/json'
          }),
          responseType: 'text'
        })
      .pipe(
        finalize(() => this.authTokenStoreService.clear()),
        mapTo(true));

  queryWhere = (postData: TestAjaxQueryInputModel) =>
    this.httpClient.get<CommonAjaxOutputModel<TestAjaxQueryOutputModel[]>>(
      this.endpointService.defaultUrl(`${this.controller}/QueryWhere`));

  insert = (postData: TestAjaxInsertInputModel) =>
    this.httpClient.post<CommonAjaxOutputModel<string>>(
      this.endpointService.defaultUrl(`${this.controller}/Insert`), postData);

  update = (postData: TestAjaxUpdateInputModel) =>
    this.httpClient.post<CommonAjaxOutputModel<string>>(
      this.endpointService.defaultUrl(`${this.controller}/Update`), postData);

  delete = (postData: string) =>
    this.httpClient.post<CommonAjaxOutputModel<string>>(
      this.endpointService.defaultUrl(`${this.controller}/Delete`), postData,
      {
        headers: new HttpHeaders({
          'Content-Type': 'text/json'
        })
      });

  queryGrid = (postData: CommonAjaxPageModel<TestAjaxQueryInputModel>) =>
    this.httpClient.post<CommonAjaxOutputModel<CommonAjaxPageModel<TestAjaxQueryOutputModel>>>(
      this.endpointService.defaultUrl(`${this.controller}/QueryGrid`), postData);

  upload = (postData: FormData) =>
    this.httpClient.post<CommonAjaxOutputModel<string>>(
      this.endpointService.defaultUrl(`${this.controller}/Upload`), postData);

  uploads = (postData: FormData) =>
    this.httpClient.post<CommonAjaxOutputModel<string>>(
      this.endpointService.defaultUrl(`${this.controller}/Uploads`), postData);

  getDownload = (postData: any) =>
    this.httpClient.get(this.endpointService.defaultUrl(`${this.controller}/Download`), {
      observe: 'response',
      responseType: 'blob'
    });

  postDownload = (postData: any) =>
    this.httpClient.post(this.endpointService.defaultUrl(`${this.controller}/Download`),
    postData,
    {
      observe: 'response',
      responseType: 'blob'
    });

}
