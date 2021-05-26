import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthTokenStoreService } from '../store/auth-token-store.service';
import { EndpointUtilService } from '../util/endpoint-util.service';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  constructor(private httpClient: HttpClient,
    private authTokenStoreService: AuthTokenStoreService,
    private endpointUtilService: EndpointUtilService) { }

  refresh(): Observable<string> {
    console.log('refresh');
    if (this.authTokenStoreService.getAuthToken()) {
      return this.httpClient
        .post(this.endpointUtilService.defaultUrl('Test/Refresh'), JSON.stringify(this.authTokenStoreService.getAuthToken()),
          {
            headers: new HttpHeaders({
              'Content-Type': 'text/json'
            }),
            responseType: 'text'
          })
        .pipe(
          tap((value: string) => this.authTokenStoreService.setAuthToken(value)));
    } else {
      console.log('refresh fail');
      return throwError('refresh fail');
    }
  }

}
