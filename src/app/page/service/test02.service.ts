import { Injectable } from '@angular/core';
import { Test02StoreService } from '../store/test02-store.service';

@Injectable({
  providedIn: 'root'
})
export class Test02Service {

  constructor(storeService: Test02StoreService) { }

  public run(text: string): void {
    console.log(`Test02Service ${text} Run`);
  }

}
