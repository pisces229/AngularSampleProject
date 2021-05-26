import { Injectable } from '@angular/core';
import { Test01StoreService } from '../store/test01-store.service';

@Injectable({
  providedIn: 'root'
})
export class Test01Service {

  constructor(storeService: Test01StoreService) { }

  run(text: string): void {
    console.log(`Test01Service ${text} Run`);
  }

}
