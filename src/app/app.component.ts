import { NothingInterceptor } from './core/interceptor/nothing.interceptor';
import { HttpBackend, HttpClient, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpInterceptorHandler } from './core/http-handler/http-interceptor-handler';
import { EndpointUtilService } from './core/util/endpoint-util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularSampleProject';
  constructor(private httpClient: HttpClient,
    private httpBackend: HttpBackend,
    private endpointUtilService: EndpointUtilService) {
    {
      httpClient.get(endpointUtilService.defaultUrl('assets/test.json'), {}).subscribe(value => console.log(value));
    }
    {
      // create new HttpClient with Interceptor
      let httpClient = new HttpClient(new HttpInterceptorHandler(httpBackend, new NothingInterceptor()));
      httpClient.get(endpointUtilService.defaultUrl('assets/test.json'), {}).subscribe(value => console.log(value));
    }
  }
}
