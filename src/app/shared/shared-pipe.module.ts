import { NgModule } from "@angular/core";
import { NumberFormatPipe } from "./pipe/number-format.pipe";

@NgModule({
  imports: [],
  declarations: [
    NumberFormatPipe
  ],
  exports: [
    NumberFormatPipe
  ]
})
export class SharedPipeModule { }
