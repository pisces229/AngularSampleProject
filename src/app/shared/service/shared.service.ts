import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private count: number = 1;

  constructor() {
  }

  get = () => this.count;

  add = (count: number) => this.count+= count;

}
