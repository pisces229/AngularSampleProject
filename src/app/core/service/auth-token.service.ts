import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import { catchError, tap, finalize } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { AuthTokenStoreService } from '../store/auth-token-store.service';
import { CatchErrorService } from './catch-error.service';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  constructor(private httpClient : HttpClient,
    private authTokenStoreService : AuthTokenStoreService,
    private catchErrorService : CatchErrorService) { }

  refresh() : Observable<string> {
    console.log('refresh');
    if (this.authTokenStoreService.getAuthToken()) {
      return this.httpClient
        .post(`${environment.APIEndpoint}/Test/Refresh`, JSON.stringify(this.authTokenStoreService.getAuthToken()),
          {
            headers: new HttpHeaders({
              'Content-Type': 'text/json'
            }),
            responseType: 'text'
          })
        .pipe(
          tap((value : string) => this.authTokenStoreService.setAuthToken(value)));
    } else {
      console.log('refresh fail');
      return throwError('refresh fail');
    }
  }

}
