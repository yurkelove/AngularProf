import {Component} from '@angular/core';
import {AppCounterService} from './services/app-counter.service';
import {LocalCliCounterService} from './services/local-cli-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //  Регистрируем локально сервис
  providers: [LocalCliCounterService]
})

export class AppComponent {

  constructor(
    private appCounterService: AppCounterService,
    private localCliCounterService: LocalCliCounterService
  ) {}

}


