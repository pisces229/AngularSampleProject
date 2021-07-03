import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreRoutingPath } from './store-routing-path';
import { Store00Component } from './store00/store00.component';
import { Store01Component } from './store01/store01.component';
import { Store02Component } from './store02/store02.component';

const routes: Routes = [
  {
    path: StoreRoutingPath.Store00,
    component: Store00Component,
    children: [
      {
        path: StoreRoutingPath.Store01,
        component: Store01Component
      },
      {
        path: StoreRoutingPath.Store02,
        component: Store02Component
      }
    ]
  },
  {
    path: '**',
    redirectTo: StoreRoutingPath.Store00,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
