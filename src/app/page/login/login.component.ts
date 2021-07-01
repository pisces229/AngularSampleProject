import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) {
    let htmlLinkElement = this.document.getElementById('body') as HTMLLinkElement;
    if (htmlLinkElement) {
      htmlLinkElement.href = `login.css?` + new Date().getTime();
    }
  }

  ngOnInit(): void {
  }

}
