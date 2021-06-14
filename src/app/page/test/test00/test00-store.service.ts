import { Injectable } from '@angular/core';
import { DefaultStroeService } from 'src/app/shared/store/default-store.service';

@Injectable({
  providedIn: 'root'
})
export class Test00StoreService implements DefaultStroeService {

  constructor() {
    console.log('Test00StoreService');
  }

  clear(): void {

  }

}
