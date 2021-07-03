import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutRoutingPath } from './layout-routing-path';
import { Layout00Component } from './layout00/layout00.component';
import { Layout01Component } from './layout01/layout01.component';
import { Layout02Component } from './layout02/layout02.component';

const routes: Routes = [
  {
    path: LayoutRoutingPath.Layout00,
    component: Layout00Component,
    children: [
      {
        path: LayoutRoutingPath.Layout01,
        component: Layout01Component
      },
      {
        path: LayoutRoutingPath.Layout02,
        component: Layout02Component
      }
    ]
  },
  {
    path: '**',
    redirectTo: LayoutRoutingPath.Layout00,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
