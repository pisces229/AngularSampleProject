import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, timer } from 'rxjs';
import { SlotService } from '../slotservice';

@Component({
  selector: 'app-slot-overlay',
  templateUrl: './slot-overlay.component.html',
  styleUrls: ['./slot-overlay.component.scss']
})
export class SlotOverlayComponent implements OnInit, OnDestroy {

  private subject = new Subject<void>();
  observable$: Observable<void> = this.subject.asObservable();

  private timerSubscription!: Subscription;

  constructor(private slotService: SlotService) { }

  ngOnInit(): void {
    this.slotService.add()
    this.timerSubscription = timer(1000, 1000).subscribe(value => {
      console.log('SlotOverlayComponent:', this.slotService.get())
    });
  }

  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
    console.log('SlotOverlayComponent', 'ngOnDestroy');
  }

  onClickClose(): void {
    this.subject.next();
    this.subject.complete();
  }

}
