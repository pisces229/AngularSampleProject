import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
// core
import { AuthTokenStoreService } from '../../shared/store/auth-token-store.service';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  constructor(private httpClient: HttpClient,
    private httpBackend: HttpBackend,
    private router: Router,
    private authTokenStoreService: AuthTokenStoreService,
    private endpointService: EndpointService) { }

  refresh(): Observable<string> {
    if (this.authTokenStoreService.getAuthToken()) {
      let httpClient = new HttpClient(this.httpBackend);
      return httpClient
      .post(this.endpointService.defaultUrl('Test/Refresh'), JSON.stringify(this.authTokenStoreService.getAuthToken()),
      {
        headers: new HttpHeaders({
          'Content-Type': 'text/json'
        }),
        responseType: 'text'
      })
      .pipe(
        tap((value: string) => this.authTokenStoreService.setAuthToken(value)),
        catchError(() => {
          this.authTokenStoreService.clear();
          this.router.navigate(['']);
          return EMPTY;
        })
      );
    } else {
      this.router.navigate(['']);
      return EMPTY;
    }
  }

}
