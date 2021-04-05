import { Component } from '@angular/core';
import {AppCounterService} from '../services/app-counter.service';
import {LocalCliCounterService} from '../services/local-cli-counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [LocalCliCounterService]
})
export class CounterComponent {

  constructor(private appCounterService: AppCounterService, private localCliCounterService: LocalCliCounterService) { }

}
