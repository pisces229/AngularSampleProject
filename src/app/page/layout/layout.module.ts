import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { Layout00Component } from './layout00/layout00.component';
import { Layout01Component } from './layout01/layout01.component';
import { Layout02Component } from './layout02/layout02.component';

@NgModule({
  declarations: [
    Layout00Component,
    Layout01Component,
    Layout02Component,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
