import { Component, Inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ERROR_TOAST_TOKEN } from './error-toast-token';

@Component({
  selector: 'app-error-toast',
  templateUrl: './error-toast.component.html',
  styleUrls: ['./error-toast.component.scss']
})
export class ErrorToastComponent {

  private subject = new Subject<void>();
  observable$: Observable<void> = this.subject.asObservable();

  constructor(@Inject(ERROR_TOAST_TOKEN) public value: { message: string; stack: string }) {}

  onClickClose(): void {
    this.subject.next();
    this.subject.complete();
  }

}
