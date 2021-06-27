import { NothingInterceptor } from './core/interceptor/nothing.interceptor';
import { HttpBackend, HttpClient, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';

import { HttpInterceptorHandler } from './core/handler/http-interceptor-handler';
import { BlockToastService } from './shared/component/block-toast/block-toast.service';
import { ErrorToastService } from './shared/component/error-toast/error-toast.service';
import { EndpointService } from './shared/service/endpoint.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'AngularSampleProject';

  items = ["test00", "test01", "test02"];

  constructor(private injector: Injector,
    private router: Router,
    private httpClient: HttpClient,
    private httpBackend: HttpBackend,
    private endpointService: EndpointService) {
    injector.get(BlockToastService);
    injector.get(ErrorToastService);
    // {
    //   httpClient.get(endpointUtilService.defaultUrl('assets/test.json')).subscribe(value => console.log(value));
    // }
    // {
    //   // create new HttpClient with Interceptor
    //   let httpClient = new HttpClient(new HttpInterceptorHandler(httpBackend, new NothingInterceptor(this.injector)));
    //   httpClient.get(endpointUtilService.defaultUrl('assets/test.json')).subscribe(value => console.log(value));
    // }
  }

  goPage(page: string): void {
    // do clear all page store
    this.router.navigate([`test/${page}`]);
  }

}
