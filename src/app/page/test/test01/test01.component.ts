import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RouteDataService } from 'src/app/shared/service/route-data.service';
import { AppRoutingPath } from 'src/app/app-routing-path';
import { TestRoutingPath } from '../test-routing-path';
import {
  Test01Model,
  Test01FormModel
} from './test01-model';
import { Test01Service } from './test01.service';
import { Test01StoreService } from './test01-store.service';


@Component({
  selector: 'app-test01',
  templateUrl: './test01.component.html',
  styleUrls: ['./test01.component.scss'],
})
export class Test01Component implements OnInit {

  test01Model = new Test01Model();
  test01FormModel = new Test01FormModel();

  //behavior = new BehaviorSubject<string>('');

  constructor(private router: Router,
    private routeDataService: RouteDataService,
    private test01Service: Test01Service,
    private test01StoreService: Test01StoreService) {
      let routeUrl = this.routeDataService.url(AppRoutingPath.Test, TestRoutingPath.Test01);
      console.log('routeDataService', routeDataService.get<any>(routeUrl));
      if (this.test01StoreService.getTest01Model()) {
        this.test01Model = this.test01StoreService.getTest01Model();
      }
      if (this.test01StoreService.getTest01FormModel()) {
        this.test01FormModel = this.test01StoreService.getTest01FormModel();
      }
  }

  ngOnInit(): void {
  }

  plus(): void{
    this.test01Model.Count++;
  }

  minus(): void{
    this.test01Model.Count--;
  }

  go(): void {
    // keep state
    this.test01StoreService.setTest01Model(this.test01Model);
    this.test01FormModel.Age = null;
    this.test01StoreService.setTest01FormModel(this.test01FormModel);
    // post data
    let routeUrl = this.routeDataService.url(AppRoutingPath.Test, TestRoutingPath.Test02);
    this.routeDataService.set(routeUrl, { routeUrl });
    this.router.navigate([routeUrl]);
  }

  onChangeFormName(event: Event): void {
    const htmlInputElement = (event.target as HTMLInputElement);
    console.log(htmlInputElement.value);
  }

}
