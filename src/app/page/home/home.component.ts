import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) {
    let htmlLinkElement = this.document.getElementById('body') as HTMLLinkElement;
    if (htmlLinkElement) {
      htmlLinkElement.href = `home.css?` + new Date().getTime();
    }
  }

  ngOnInit(): void {
  }

}
