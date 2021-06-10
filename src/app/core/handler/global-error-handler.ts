import { ErrorHandler, Injectable, Injector } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error: any) {
    //const catchErrorService = this.injector.get(CatchErrorService);
    console.log(error);
    //catchErrorService.pushError(error);
    throw error;
  }

}
