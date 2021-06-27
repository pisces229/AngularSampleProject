import { NgModule } from "@angular/core";

import { SharedAngularCdkModule } from "./shared-angular-cdk.module";
import { SharedAngularMaterialModule } from "./shared-angular-material.module";

import { BlockToastComponent } from "./component/block-toast/block-toast.component";
import { BlockToastService } from "./component/block-toast/block-toast.service";
import { ErrorToastComponent } from "./component/error-toast/error-toast.component";
import { ErrorToastService } from "./component/error-toast/error-toast.service";


@NgModule({
  imports: [
    SharedAngularCdkModule,
    SharedAngularMaterialModule
  ],
  declarations: [
    BlockToastComponent,
    ErrorToastComponent,
  ],
  exports: [
    BlockToastComponent,
    ErrorToastComponent,
  ],
  providers:[
    BlockToastService,
    ErrorToastService
  ]
})
export class SharedComponentModule { }
