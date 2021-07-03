import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { Store02Component } from './store02/store02.component';
import { Store01Component } from './store01/store01.component';
import { Store00Component } from './store00/store00.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Store00Component,
    Store01Component,
    Store02Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
