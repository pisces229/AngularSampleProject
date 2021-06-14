import { Injectable } from '@angular/core';
import { DefaultStroeService } from 'src/app/shared/store/default-store.service';

import {
  Test01Model,
  Test01FormModel
} from './test01-model';

@Injectable({
  providedIn: 'root'
})
export class Test01StoreService implements DefaultStroeService {

  private test01Model!: Test01Model | null;
  private test01FormModel!: Test01FormModel | null;

  constructor() {
    console.log('Test01StoreService');
  }

  setTest01Model = (value: Test01Model): void => { this.test01Model = value; }
  getTest01Model = (): Test01Model => this.test01Model!;

  setTest01FormModel = (value: Test01FormModel): void => { this.test01FormModel = value; }
  getTest01FormModel = (): Test01FormModel => this.test01FormModel!;

  clear(): void {
    this.test01Model = null;
    this.test01FormModel = null;
  }

}
