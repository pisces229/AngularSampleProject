import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { CatchErrorService } from '../service/catch-error.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error: any) {
    const catchErrorService = this.injector.get(CatchErrorService);
    catchErrorService.pushError(error);
    throw error;
  }

}
