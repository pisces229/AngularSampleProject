import { Injectable } from '@angular/core';
import { TestFormModel } from '../../model/test/test-form-model';

@Injectable({
  providedIn: 'root'
})
export class Page01StoreService {
  testFormModel!: TestFormModel;
  constructor() { }
}
