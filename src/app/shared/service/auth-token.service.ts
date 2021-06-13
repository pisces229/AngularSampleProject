import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
// core
import { AuthTokenStoreService } from '../../shared/store/auth-token-store.service';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  constructor(private httpClient: HttpClient,
    private authTokenStoreService: AuthTokenStoreService,
    private endpointService: EndpointService) { }

  refresh(): Observable<string> {
    console.log('refresh');
    if (this.authTokenStoreService.getAuthToken()) {
      return this.httpClient
        .post(this.endpointService.defaultUrl('Test/Refresh'), JSON.stringify(this.authTokenStoreService.getAuthToken()),
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
