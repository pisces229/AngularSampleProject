import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-slot-overlay',
  templateUrl: './slot-overlay.component.html',
  styleUrls: ['./slot-overlay.component.scss']
})
export class SlotOverlayComponent implements OnInit, OnDestroy {

  private subject = new Subject<void>();
  observable$: Observable<void> = this.subject.asObservable();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('SlotOverlayComponent', 'ngOnDestroy');
  }

  onClickClose(): void {
    this.subject.next();
    this.subject.complete();
  }

}
