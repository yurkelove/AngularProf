import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'about', loadChildren: () => import('./about-page/about-page.module').then(m => m.AboutPageModule)},
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  } )],
    //Старый вариант
    // {path: 'about', loadChildren: './about-page/about-page.module#AboutPageModule'}
  exports: [RouterModule]
})
export class AppRoutingModule {

}


//preloadingStrategy - загружает все самое не обходимое, и в фоновом режими отдельные модули, для оптимизации
