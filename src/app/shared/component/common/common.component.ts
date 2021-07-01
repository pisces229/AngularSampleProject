import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show(): void {
    console.log('CommonComponent', 'show');
  }

}
