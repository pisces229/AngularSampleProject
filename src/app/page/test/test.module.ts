import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// app
import { SharedAngularCdkModule } from 'src/app/shared/shared-angular-cdk.module';
import { SharedAngularMaterialModule } from 'src/app/shared/shared-angular-material.module';
import { SharedPipeModule } from 'src/app/shared/shared-pipe.module';
import { SharedComponentModule } from 'src/app/shared/shared-component.module';
// page
import { TestRoutingModule } from './test-routing.module';
import { TestService } from './test.service';
import { Test00Component } from './test00/test00.component';
import { Test01Component } from './test01/test01.component';
import { Test02Component } from './test02/test02.component';

@NgModule({
  declarations: [
    Test00Component,
    Test01Component,
    Test02Component
  ],
  imports: [
    CommonModule,
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
    TestService,
  ]
})
export class TestModule { }
