import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BlockUIModule } from 'ng-block-ui';
// core
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultInterceptor } from './core/interceptor/default.interceptor';
// Page Component
import { TestComponent } from './page/component/test/test.component';
import { NumberFormatPipe } from './shared/pipe/number-format.pipe';
import { Test01Component } from './page/component/test01/test01.component';
import { Test02Component } from './page/component/test02/test02.component';
import { LayoutComponent } from './shared/component/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberFormatPipe,
    TestComponent,
    Test01Component,
    Test02Component,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BlockUIModule.forRoot({
      message: 'Loading...'
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DefaultInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
