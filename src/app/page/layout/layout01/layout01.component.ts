import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout01',
  templateUrl: './layout01.component.html',
  styleUrls: ['./layout01.component.scss']
})
export class Layout01Component implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) {
    let htmlLinkElement = this.document.getElementById('layout') as HTMLLinkElement;
    if (htmlLinkElement) {
      htmlLinkElement.href = `layout01.css?` + new Date().getTime();
    }
  }

  ngOnInit(): void {
  }

}
