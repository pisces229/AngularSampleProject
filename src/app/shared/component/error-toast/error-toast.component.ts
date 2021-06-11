import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Observable, Subject } from 'rxjs';
import { ERROR_TOAST_DATA } from '../../service/error-toast.service';

@Component({
  selector: 'app-error-toast',
  templateUrl: './error-toast.component.html',
  styleUrls: ['./error-toast.component.scss']
})
export class ErrorToastComponent {

  private subject = new Subject<void>();
  observable$: Observable<void> = this.subject.asObservable();

  constructor(@Inject(ERROR_TOAST_DATA) public value: { message: string; stack: string }) {}

  onClickClose(): void {
    this.subject.next();
    this.subject.complete();
  }

}
