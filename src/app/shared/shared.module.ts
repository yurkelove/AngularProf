// Создали модуль общий если он будет переиспользоваться во многих местах

import {NgModule} from '@angular/core';
import {ColorDirective} from './color.directive';
import {PageNamePipe} from './page-name.pipe';

@NgModule({
  declarations: [
    ColorDirective,
    PageNamePipe
  ],
  // Для того что бы увидили компоненты из вне
  exports: [
    ColorDirective,
    PageNamePipe
  ]
})

export class SharedModule {

}
