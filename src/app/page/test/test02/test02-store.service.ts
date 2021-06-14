import { Injectable } from '@angular/core';
import { DefaultStroeService } from 'src/app/shared/store/default-store.service';

import {
  Test02Model,
  Test02FormModel
} from './test02-model';

@Injectable({
  providedIn: 'root'
})
export class Test02StoreService implements DefaultStroeService {

  test02Model!: Test02Model | null;
  test02FormModel!: Test02FormModel | null;

  constructor() {
    console.log('Test02StoreService');
  }

  setTest02Model = (value: Test02Model): void => { this.test02Model = value; }
  getTest02Model = (): Test02Model => this.test02Model!;

  setTest02FormModel = (value: Test02FormModel): void => { this.test02FormModel = value; }
  getTest02FormModel = (): Test02FormModel => this.test02FormModel!;

  clear(): void {
    this.test02Model = null;
    this.test02FormModel = null;
  }

}
