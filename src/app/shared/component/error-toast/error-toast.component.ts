import { Component, Inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ERROR_TOAST_TOKEN } from './error-toast-token';
import { Clipboard } from "@angular/cdk/clipboard";
import { PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-error-toast',
  templateUrl: './error-toast.component.html',
  styleUrls: ['./error-toast.component.scss']
})
export class ErrorToastComponent {

  private subject = new Subject<void>();
  observable$: Observable<void> = this.subject.asObservable();

  constructor(@Inject(ERROR_TOAST_TOKEN) public value: { message: string; stack: string },
    private clipboard: Clipboard) {
  }

  onClickCopy(): void {
    this.clipboard.copy( `
    location: ${location.href}
    message: ${this.value.message}
    stack: ${this.value.stack}
    `);
    this.subject.next();
    this.subject.complete();
  }

  onClickClose(): void {
    this.subject.next();
    this.subject.complete();
  }

}
