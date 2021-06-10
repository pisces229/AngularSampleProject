import { PathLocationStrategy } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as StackTrace from 'stacktrace-js';
import { ErrorToastComponent } from '../component/error-toast/error-toast.component';

@Injectable()
export class ErrorToastService {

  private opened = false;

  constructor(private dialog: MatDialog) {}

  pushError(error: any) {
    if (error) {
      console.error(error);
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
      console.error(error);
      try {
        this.push(`${error.status} ${error.statusText}`, error.message);
      } catch {
        this.push('error', JSON.stringify(error));
      }
    }
  }

  push(message: string, stack: string) {
    try {
      const path = location instanceof PathLocationStrategy ? location.path() : '';
      if (!this.opened) {
        this.opened = true;
        const dialogRef = this.dialog.open(ErrorToastComponent, {
          data: { message, stack },
          disableClose: true,
          hasBackdrop: true,
          minWidth: "50%",
        });
        dialogRef.afterClosed().subscribe(() => {
          this.opened = false;
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
}
