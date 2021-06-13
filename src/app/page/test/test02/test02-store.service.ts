import { Injectable } from '@angular/core';

import {
  Test02Model,
  Test02FormModel
} from './test02-model';

@Injectable({
  providedIn: 'root'
})
export class Test02StoreService {

  test02Model!: Test02Model;
  test02FormModel!: Test02FormModel;

  constructor() {
    console.log('Test02StoreService');
  }

  setTest02Model = (value: Test02Model): void => { this.test02Model = value; }
  getTest02Model = (): Test02Model => this.test02Model;

  setTest02FormModel = (value: Test02FormModel): void => { this.test02FormModel = value; }
  getTest02FormModel = (): Test02FormModel => this.test02FormModel;

}
