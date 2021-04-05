import { Injectable } from '@angular/core';

@Injectable()

export class LocalCliCounterService {

  counter  = 0;

  increase() {
    this.counter ++;
  }

  decrease() {
    this.counter--;
  }
}
