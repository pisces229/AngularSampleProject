import { Injectable } from '@angular/core';

@Injectable()
export class Test01Service {

  constructor() {
    console.log('Test01Service');
  }

  run(text: string): void {
    console.log(`Test01Service ${text} Run`);
  }

}
