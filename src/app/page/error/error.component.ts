import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document,
    private router: Router) {
    let htmlLinkElement = this.document.getElementById('body') as HTMLLinkElement;
    if (htmlLinkElement) {
      htmlLinkElement.href = ``;
    }
  }

  ngOnInit(): void {
  }

}
