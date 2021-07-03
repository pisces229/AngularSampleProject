import { Injectable } from '@angular/core';
import { DefaultStroeService } from 'src/app/shared/store/default-store.service';
import { Store01FormModel, Store02FormModel } from './store-model';

@Injectable({
  providedIn: 'root'
})
export class StoreStoreService implements DefaultStroeService {

  store01FormModel?: Store01FormModel;
  store02FormModel?: Store02FormModel;

  constructor() { }

  setStore01FormModel = (value: Store01FormModel): void => { this.store01FormModel = value; }
  getStore01FormModel = (): Store01FormModel => this.store01FormModel!;

  setStore02FormModel = (value: Store02FormModel): void => { this.store02FormModel = value; }
  getStore02FormModel = (): Store02FormModel => this.store02FormModel!;


  clear(): void {
    this.store01FormModel = undefined;
    this.store02FormModel = undefined;
  }

}
