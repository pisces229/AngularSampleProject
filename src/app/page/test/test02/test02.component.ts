import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { CommonModeModel } from 'src/app/shared/model/common-model';
import { BlockToastService } from 'src/app/shared/component/block-toast/block-toast.service';
import { RouteDataService } from 'src/app/shared/service/route-data.service';
import { CommonComponent } from 'src/app/shared/component/common/common.component';
import { AppRoutingPath } from 'src/app/app-routing-path';
import { TestRoutingPath } from '../test-routing-path';
import {
  Test02Model,
  Test02FormModel
} from './../test-model';
import { TestService } from './../test.service';
import { TestStoreService } from './../test-store.service';

@Component({
  selector: 'app-test02',
  templateUrl: './test02.component.html',
  styleUrls: ['./test02.component.scss'],
})
export class Test02Component implements OnInit {

  test02Model: Test02Model = {
    Count: 0
  };
  test02FormModel: Test02FormModel = {};

  options = [
    { value: '', text: 'Please Select One' },
    { value: '1', text: 'AAAAA' },
    { value: '2', text: 'BBBBB' },
    { value: '3', text: 'CCCCC' },
  ];

  buttonPlusMode: CommonModeModel = { Enable: true, Hidden: false };
  buttonMinusMode: CommonModeModel = { Enable: true, Hidden: false };

  @ViewChild('viewChildCommonComponent') viewChildCommonComponent!: CommonComponent;

  constructor(private router: Router,
    private routeDataService: RouteDataService,
    private testService: TestService,
    private testStoreService: TestStoreService,
    private blockToastService: BlockToastService) {
    let routeUrl = this.routeDataService.url(AppRoutingPath.Test, TestRoutingPath.Test02);
    switch (routeDataService.action(routeUrl)) {
      case 'Keep': {
        if (testStoreService.getTest02Model()) {
          this.test02Model = this.testStoreService.getTest02Model();
        }
        if (testStoreService.getTest02FormModel()) {
          this.test02FormModel = this.testStoreService.getTest02FormModel();
        }
        break;
      }
    }
    //this.buttonMinusMode.Enable = false;
    this.buttonMinusMode.Hidden = true;
  }

  ngOnInit(): void {
    // Start blocking
    this.blockToastService.start();
    // do something
    setTimeout(() => {
      // Stop blocking
      this.blockToastService.stop();
    }, 1000);
  }

  plus(): void{
    this.test02Model.Count++;
  }

  minus(): void{
    this.test02Model.Count--;
  }

  go(): void {
    // keep state
    this.testStoreService.setTest02Model(this.test02Model);
    this.test02FormModel.Age = undefined;
    this.testStoreService.setTest02FormModel(this.test02FormModel);
    // post data
    let routeUrl = this.routeDataService.url(AppRoutingPath.Test, TestRoutingPath.Test01);
    this.routeDataService.set(routeUrl, 'Keep', { routeUrl });
    this.router.navigate([routeUrl]);
  }

  show(): void {
    this.viewChildCommonComponent.show();
  }

}
