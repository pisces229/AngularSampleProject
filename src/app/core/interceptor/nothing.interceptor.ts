import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorToastService } from 'src/app/shared/service/error-toast.service';

@Injectable()
export class NothingInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('NothingInterceptor');
    return next.handle(request)
    .pipe(catchError((error) => {
      const errorToastService = this.injector.get(ErrorToastService);
      errorToastService.pushHttpErrorResponse(error);
      return throwError(error);
    }));
  }
}
