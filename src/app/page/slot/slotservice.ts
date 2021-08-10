
import { Injectable } from '@angular/core';

@Injectable()
export class SlotService {

  private count: number = 0;

  constructor() {
  }

  get = () => this.count;

  add = () => this.count++;

}
