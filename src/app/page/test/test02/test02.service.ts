import { Injectable } from '@angular/core';

@Injectable()
export class Test02Service {

  constructor() {
    console.log('Test02Service');
  }

  public run(text: string): void {
    console.log(`Test02Service ${text} Run`);
  }

}
