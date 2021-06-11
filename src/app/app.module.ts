import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// cdk
import { OverlayModule } from '@angular/cdk/overlay';
// material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// core
import { GlobalErrorHandler } from './core/handler/global-error-handler';
import { DefaultInterceptor } from './core/interceptor/default.interceptor';
// shared
import { BlockToastComponent } from './shared/component/block-toast/block-toast.component';
import { ErrorToastComponent } from './shared/component/error-toast/error-toast.component';
import { NumberFormatPipe } from './shared/pipe/number-format.pipe';
// page
import { TestComponent } from './page/component/test/test.component';
import { Test01Component } from './page/component/test01/test01.component';
import { Test02Component } from './page/component/test02/test02.component';

@NgModule({
  declarations: [
    AppComponent,
    // shared
    BlockToastComponent,
    ErrorToastComponent,
    NumberFormatPipe,
    // page
    TestComponent,
    Test01Component,
    Test02Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    OverlayModule,
    MatProgressSpinnerModule,
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
