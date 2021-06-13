import { Injectable } from '@angular/core';

import {
  Test01Model,
  Test01FormModel
} from './test01-model';

@Injectable({
  providedIn: 'root'
})
export class Test01StoreService {

  private test01Model!: Test01Model;
  private test01FormModel!: Test01FormModel;

  constructor() {
    console.log('Test01StoreService');
  }

  setTest01Model = (value: Test01Model): void => { this.test01Model = value; }
  getTest01Model = (): Test01Model => this.test01Model;

  setTest01FormModel = (value: Test01FormModel): void => { this.test01FormModel = value; }
  getTest01FormModel = (): Test01FormModel => this.test01FormModel;

}
