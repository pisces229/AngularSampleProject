import { PathLocationStrategy } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as StackTrace from 'stacktrace-js';

@Injectable({
  providedIn: 'root'
})
export class CatchErrorService {

  constructor() { }

  pushError(error: any) {
    if (error) {
      try {
        StackTrace.fromError(error)
        .then((value) => {
          const stack = value
          //.splice(0, 20)
          .map((value) => {
            return value.toString();
          }).join('\n');
          this.push((error.message ? error.message : 'message'), stack);
        })
        .catch(() => {
          this.push('error', JSON.stringify(error));
        });
      } catch {
        this.push('error', JSON.stringify(error));
      }
    }
  }

  pushHttpErrorResponse(error: HttpErrorResponse) {
    if (error) {
      try {
        this.push(`${error.status} ${error.statusText}`, error.message);
      } catch {
        this.push('error', JSON.stringify(error));
      }
    }
  }

  private push(message: string, stack: string) {
    const path = location instanceof PathLocationStrategy ? location.path() : '';
    console.log({ path: path, message: message, stack: stack});
  }

}
