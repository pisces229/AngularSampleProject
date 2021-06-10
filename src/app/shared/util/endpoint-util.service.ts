import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
// core

@Injectable({
  providedIn: 'root'
})
export class EndpointUtilService {

  constructor() { }

  defaultUrl = (url : string) => `${environment.defaultEndpoint}/${url}`;

}
