import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Test01FormModel } from '../../model/test01/test01-form-model';
import { Test01Model } from '../../model/test01/test01-model';
import { Test01Service } from '../../service/test01.service';
import { Test01StoreService } from '../../store/test01-store.service';

@Component({
  selector: 'app-test01',
  templateUrl: './test01.component.html',
  styleUrls: ['./test01.component.scss']
})
export class Test01Component implements OnInit {

  @BlockUI() blockUI! : NgBlockUI;

  test01Model = new Test01Model();
  test01FormModel = new Test01FormModel();

  constructor(private router : Router,
    private service : Test01Service,
    private storeService : Test01StoreService) {
      if (storeService.getTest01Model()) {
        this.test01Model = this.storeService.getTest01Model();
      }
      if (storeService.getTest01FormModel()) {
        this.test01FormModel = this.storeService.getTest01FormModel();
      }
  }

  ngOnInit() : void {
    // Start blocking
    this.blockUI.start('Loading...');

    setTimeout(() => {
      // Stop blocking
      this.blockUI.stop();
    }, 500);
  }

  plus() : void{
    this.test01Model.Count++;
  }

  minus() : void{
    this.test01Model.Count--;
  }

  go() : void {
    this.storeService.setTest01Model(this.test01Model);
    this.storeService.setTest01FormModel(this.test01FormModel);
    this.router.navigate(['test02']);
  }

}
