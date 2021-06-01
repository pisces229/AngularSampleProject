import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, filter, take, switchMap, delay, finalize } from 'rxjs/operators';
// core
import { AuthTokenService } from '../service/auth-token.service';
import { CatchErrorService } from '../service/catch-error.service';
import { AuthTokenStoreService } from '../store/auth-token-store.service';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {

  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private authTokenService: AuthTokenService,
    private authTokenStoreService: AuthTokenStoreService,
    private catchErrorService: CatchErrorService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('DefaultInterceptor');
    if (this.authTokenStoreService.getAuthToken()) {
      request = this.addToken(request, this.authTokenStoreService.getAuthToken());
    }
    return next.handle(request)
    .pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        return this.handle401Error(request, next);
        // return this.handle401ErrorOnly(request, next);
      } else {
        this.catchErrorService.push(error);
        return throwError(error);
      }
    }));
  }

  private addToken(request: HttpRequest<any>, token: string | null): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  private handle401ErrorOnly(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      return this.authTokenService.refresh().pipe(
        switchMap((token: string) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token);
          return next.handle(this.addToken(request, token));
        }));
    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(token => {
          return next.handle(this.addToken(request, token));
        }));
    }
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authTokenService.refresh()
    .pipe(
      switchMap((token: string) => {
        return next.handle(this.addToken(request, token));
      }));
  }

}
