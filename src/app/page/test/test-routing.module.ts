import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestRoutingPath } from './test-routing-path';

import { Test00Component } from './test00/test00.component';
import { Test01Component } from './test01/test01.component';
import { Test02Component } from './test02/test02.component';

const routes: Routes = [
  {
    path: TestRoutingPath.Test00,
    component: Test00Component,
  },
  {
    path: TestRoutingPath.Test01,
    component: Test01Component
  },
  {
    path: TestRoutingPath.Test02,
    component: Test02Component
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
