import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// app
import { SharedAngularCdkModule } from 'src/app/shared-angular-cdk.module';
import { SharedAngularMaterialModule } from 'src/app/shared-angular-material.module';
// shared
import { SharedPipeModule } from 'src/app/shared/shared-pipe.module';
import { SharedComponentModule } from 'src/app/shared/shared-component.module';

import { TestRoutingModule } from './test-routing.module';
// component
import { Test00Component } from './test00/test00.component';
import { Test01Component } from './test01/test01.component';
import { Test02Component } from './test02/test02.component';
// service
import { Test00Service } from './test00/test00.service';
import { Test01Service } from './test01/test01.service';
import { Test02Service } from './test02/test02.service';

@NgModule({
  declarations: [
    Test00Component,
    Test01Component,
    Test02Component
  ],
  imports: [
    FormsModule,
    TestRoutingModule,
    // app
    SharedAngularCdkModule,
    SharedAngularMaterialModule,
    // shared
    SharedPipeModule,
    SharedComponentModule
  ],
  providers: [
    Test00Service,
    Test01Service,
    Test02Service,
  ]
})
export class TestModule { }
