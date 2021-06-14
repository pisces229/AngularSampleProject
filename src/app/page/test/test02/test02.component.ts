import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlockToastService } from 'src/app/shared/component/block-toast/block-toast.service';
import { RouteDataService } from 'src/app/shared/service/route-data.service';
import { AppRoutingPath } from 'src/app/app-routing-path';
import { TestRoutingPath } from '../test-routing-path';
import { Test02Service } from './test02.service';
import { Test02StoreService } from './test02-store.service';
import {
  Test02Model,
  Test02FormModel
} from './test02-model';

@Component({
  selector: 'app-test02',
  templateUrl: './test02.component.html',
  styleUrls: ['./test02.component.scss'],
})
export class Test02Component implements OnInit {

  test02Model = new Test02Model();
  test02FormModel = new Test02FormModel();

  constructor(private router: Router,
    private routeDataService: RouteDataService,
    private test02Service: Test02Service,
    private test02StoreService: Test02StoreService,
    private blockToastService: BlockToastService) {
      let routeUrl = this.routeDataService.url(AppRoutingPath.Test, TestRoutingPath.Test02);
      console.log('routeDataService', routeDataService.get<any>(routeUrl));
      if (test02StoreService.getTest02Model()) {
        this.test02Model = this.test02StoreService.getTest02Model();
      }
      if (test02StoreService.getTest02FormModel()) {
        this.test02FormModel = this.test02StoreService.getTest02FormModel();
      }
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
    this.test02StoreService.setTest02Model(this.test02Model);
    this.test02FormModel.Age = null;
    this.test02StoreService.setTest02FormModel(this.test02FormModel);
    // post data
    let routeUrl = this.routeDataService.url(AppRoutingPath.Test, TestRoutingPath.Test01);
    this.routeDataService.set(routeUrl, { routeUrl });
    this.router.navigate([routeUrl]);
  }

}
