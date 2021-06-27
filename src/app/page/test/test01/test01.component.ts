import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonModeModel } from 'src/app/shared/model/commond-model';
import { BlockToastService } from 'src/app/shared/component/block-toast/block-toast.service';
import { RouteDataService } from 'src/app/shared/service/route-data.service';
import { AppRoutingPath } from 'src/app/app-routing-path';
import { TestRoutingPath } from '../test-routing-path';
import {
  Test01Model,
  Test01FormModel
} from './../test-model';
import { TestService } from './../test.service';
import { TestStoreService } from './../test-store.service';


@Component({
  selector: 'app-test01',
  templateUrl: './test01.component.html',
  styleUrls: ['./test01.component.scss'],
})
export class Test01Component implements OnInit {

  test01Model: Test01Model = {
    Count: 0
  };
  test01FormModel: Test01FormModel = {};

  options = [
    { value: '', text: 'Please Select One' },
    { value: '1', text: 'AAAAA' },
    { value: '2', text: 'BBBBB' },
    { value: '3', text: 'CCCCC' },
  ];

  buttonPlusMode: CommonModeModel = { Enable: true, Hidden: false };
  buttonMinusMode: CommonModeModel = { Enable: true, Hidden: false };

  constructor(private router: Router,
    private routeDataService: RouteDataService,
    private testService: TestService,
    private testStoreService: TestStoreService,
    private blockToastService: BlockToastService) {
    let routeUrl = this.routeDataService.url(AppRoutingPath.Test, TestRoutingPath.Test01);
    switch (routeDataService.action(routeUrl)) {
      case 'Keep': {
        if (this.testStoreService.getTest01Model()) {
          this.test01Model = this.testStoreService.getTest01Model();
        }
        if (this.testStoreService.getTest01FormModel()) {
          this.test01FormModel = this.testStoreService.getTest01FormModel();
        }
        break;
      }
    }
    this.buttonMinusMode.Enable = false;
    //this.buttonMinusMode.Hidden = true;
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
    this.test01Model.Count++;
  }

  minus(): void{
    this.test01Model.Count--;
  }

  go(): void {
    // keep state
<<<<<<< HEAD
    this.testStoreService.setTest01Model(this.test01Model);
    this.test01FormModel.Age = undefined;
    this.testStoreService.setTest01FormModel(this.test01FormModel);
=======
    this.test01StoreService.setTest01Model(this.test01Model);
    this.test01FormModel.Age = undefined;
    this.test01StoreService.setTest01FormModel(this.test01FormModel);
>>>>>>> e2ea3dd3045eb3c838d782d40425a38fd15bccc8
    // post data
    let routeUrl = this.routeDataService.url(AppRoutingPath.Test, TestRoutingPath.Test02);
    this.routeDataService.set(routeUrl, 'Keep', { routeUrl });
    this.router.navigate([routeUrl]);
  }

  onChangeFormName(event: Event): void {
    const htmlInputElement = (event.target as HTMLInputElement);
    console.log(htmlInputElement.value);
  }

}
