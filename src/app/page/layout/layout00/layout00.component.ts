import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout00',
  templateUrl: './layout00.component.html',
  styleUrls: ['./layout00.component.scss']
})
export class Layout00Component implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) {
    let htmlLinkElement = this.document.getElementById('layout') as HTMLLinkElement;
    if (htmlLinkElement) {
      htmlLinkElement.href = '';
    }
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

}
