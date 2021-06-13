
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularCdkModule } from './angular-cdk.module';
import { AngularMaterialModule } from './angular-material.module';
// core
import { GlobalErrorHandler } from './core/handler/global-error-handler';
import { DefaultInterceptor } from './core/interceptor/default.interceptor';
// shared
import { SharedComponentModule } from './shared/shared-component.module';
import { SharedPipeModule } from './shared/shared-pipe.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // app
    AngularCdkModule,
    AngularMaterialModule,
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
