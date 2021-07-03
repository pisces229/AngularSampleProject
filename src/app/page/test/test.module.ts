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
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    TestComponent,
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
