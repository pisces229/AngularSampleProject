import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonModeModel } from 'src/app/shared/model/common-model';
import { RouteDataService } from 'src/app/shared/service/route-data.service';
import { BlockToastService } from 'src/app/shared/component/block-toast/block-toast.service';
import { AppRoutingPath } from 'src/app/app-routing-path';
import { StoreRoutingPath } from '../store-routing-path';
import { Store02FormModel } from '../store-model';
import { StoreStoreService } from '../store-store.service';

@Component({
  selector: 'app-store02',
  templateUrl: './store02.component.html',
  styleUrls: ['./store02.component.scss']
})
export class Store02Component implements OnInit {

  form: Store02FormModel = {};

  options = [
    { value: '', text: 'Please Select One' },
    { value: '1', text: 'AAAAA' },
    { value: '2', text: 'BBBBB' },
    { value: '3', text: 'CCCCC' },
  ];

  buttonMode: CommonModeModel = { Enable: true, Hidden: true };

  constructor(private router: Router,
    private routeDataService: RouteDataService,
    private storeStoreService: StoreStoreService,
    private blockToastService: BlockToastService) {
    let routeUrl = this.routeDataService.url(AppRoutingPath.Store, StoreRoutingPath.Store02);
    switch (routeDataService.action(routeUrl)) {
      case 'keep': {
        if (this.storeStoreService.getStore02FormModel()) {
          this.form = this.storeStoreService.getStore02FormModel();
        }
        break;
      }
    }
  }

  ngOnInit(): void {
    this.blockToastService.start();
    setTimeout(() => {
      this.blockToastService.stop();
    }, 1000);
  }

  onClickPage(): void {
    this.storeStoreService.setStore02FormModel(this.form);
    let routeUrl = this.routeDataService.url(AppRoutingPath.Store, StoreRoutingPath.Store01);
    this.routeDataService.set(routeUrl, 'keep', { routeUrl });
    this.router.navigate([routeUrl]);
  }

}
