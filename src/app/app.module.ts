
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// core
import { GlobalErrorHandler } from './core/handler/global-error-handler';
import { DefaultInterceptor } from './core/interceptor/default.interceptor';
// shared
import { SharedAngularCdkModule } from './shared/shared-angular-cdk.module';
import { SharedAngularMaterialModule } from './shared/shared-angular-material.module';
import { SharedComponentModule } from './shared/shared-component.module';
import { SharedPipeModule } from './shared/shared-pipe.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    // app
    SharedAngularCdkModule,
    SharedAngularMaterialModule,
    // shared
    SharedPipeModule,
    SharedComponentModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DefaultInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
