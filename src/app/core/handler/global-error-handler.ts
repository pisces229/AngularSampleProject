import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { ErrorToastService } from 'src/app/shared/service/error-toast.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error: any) {
    const errorToastService = this.injector.get(ErrorToastService);
    errorToastService.pushError(error);
  }

}
