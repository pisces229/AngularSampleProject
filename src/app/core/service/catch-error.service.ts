import { Injectable } from '@angular/core';
// core

@Injectable({
  providedIn: 'root'
})
export class CatchErrorService {

  constructor() { }

  push(value: any) {
    console.log(value);
  }
}
