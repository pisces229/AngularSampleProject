import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { BlockToastComponent } from "./component/block-toast/block-toast.component";
import { ErrorToastComponent } from "./component/error-toast/error-toast.component";
import { BlockToastService } from "./service/block-toast.service";
import { ErrorToastService } from "./service/error-toast.service";

const sharedComponents = [BlockToastComponent, ErrorToastComponent];

@NgModule({
  declarations: [...sharedComponents],
  imports: [
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [...sharedComponents],
  providers: [BlockToastService, ErrorToastService],
  entryComponents: [...sharedComponents]
})
export class SharedToastModule {}
