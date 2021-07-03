import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout02',
  templateUrl: './layout02.component.html',
  styleUrls: ['./layout02.component.scss']
})
export class Layout02Component implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) {
    let htmlLinkElement = this.document.getElementById('layout') as HTMLLinkElement;
    if (htmlLinkElement) {
      htmlLinkElement.href = `layout02.css?` + new Date().getTime();
    }
  }

  ngOnInit(): void {
  }

}
