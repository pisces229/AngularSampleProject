import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedAngularCdkModule } from 'src/app/shared/shared-angular-cdk.module';
import { SlotRoutingModule } from './slot-routing.module';
import { SlotMainComponent } from './slot-main/slot-main.component';
import { SlotFormComponent } from './slot-form/slot-form.component';
import { SlotOverlayComponent } from './slot-overlay/slot-overlay.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SlotMainComponent,
    SlotFormComponent,
    SlotOverlayComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SlotRoutingModule,
    SharedAngularCdkModule,
  ]
})
export class SlotModule { }
