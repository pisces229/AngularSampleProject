import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlockUI, NgBlockUI } from 'ng-block-ui';
// core

// shared

// page
import { Test02Service } from '../../service/test02.service';
import { Test02StoreService } from '../../store/test02-store.service';
import { Test02Model } from '../../model/test02/test02-model';
import { Test02FormModel } from '../../model/test02/test02-form-model';

@Component({
  selector: 'app-test02',
  templateUrl: './test02.component.html',
  styleUrls: ['./test02.component.scss']
})
export class Test02Component implements OnInit {

  @BlockUI() blockUI!: NgBlockUI;

  test02Model = new Test02Model();
  test02FormModel = new Test02FormModel();

  constructor(private router: Router,
    private test02Service: Test02Service,
    private test02StoreService: Test02StoreService) {
      if (test02StoreService.getTest02Model()) {
        this.test02Model = this.test02StoreService.getTest02Model();
      }
      if (test02StoreService.getTest02FormModel()) {
        this.test02FormModel = this.test02StoreService.getTest02FormModel();
      }
  }

  ngOnInit(): void {
    // Start blocking
    this.blockUI.start();
    // do something
    setTimeout(() => {
      // Stop blocking
      this.blockUI.stop();
    }, 500);
  }

  plus(): void{
    this.test02Model.Count++;
  }

  minus(): void{
    this.test02Model.Count--;
  }

  go(): void {
    this.test02StoreService.setTest02Model(this.test02Model);
    this.test02FormModel.Age = null;
    this.test02StoreService.setTest02FormModel(this.test02FormModel);
    this.router.navigate(['test01']);
  }

}
