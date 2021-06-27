import { Injectable } from '@angular/core';
import { DefaultStroeService } from 'src/app/shared/store/default-store.service';

import {
  Test01Model,
  Test01FormModel,
  Test02Model,
  Test02FormModel
} from './test-model';

@Injectable({
  providedIn: 'root'
})
export class TestStoreService implements DefaultStroeService {

  private test01Model?: Test01Model;
  private test01FormModel?: Test01FormModel;

  private test02Model?: Test02Model;
  private test02FormModel?: Test02FormModel;

  constructor() {
  }

  setTest01Model = (value: Test01Model): void => { this.test01Model = value; }
  getTest01Model = (): Test01Model => this.test01Model!;

  setTest01FormModel = (value: Test01FormModel): void => { this.test01FormModel = value; }
  getTest01FormModel = (): Test01FormModel => this.test01FormModel!;

  setTest02Model = (value: Test02Model): void => { this.test02Model = value; }
  getTest02Model = (): Test02Model => this.test02Model!;

  setTest02FormModel = (value: Test02FormModel): void => { this.test02FormModel = value; }
  getTest02FormModel = (): Test02FormModel => this.test02FormModel!;

  clear(): void {
    this.test01Model = undefined;
    this.test01FormModel = undefined;

    this.test02Model = undefined;
    this.test02FormModel = undefined;
  }

}
