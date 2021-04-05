import {Injectable} from '@angular/core';
import {LogService} from './log.service';

// рекомендуется добавлять для сервиса
@Injectable()

// Что бы не писать импорт в главном модуле
// @Injectable({
//   providedIn: 'root'
// })

export class AppCounterService {
  counter  = 0;

  constructor(private logService: LogService) {
  }


  increase() {
    this.logService.log('increase counter');
    this.counter ++;
  }

  decrease() {
    this.logService.log('decrease counter');
    this.counter--;
  }
}
