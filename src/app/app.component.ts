import {Component} from '@angular/core';
import {Observable} from 'rxjs';

export interface Post {
  title: string;
  text: string;
  id?: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  e: number = Math.E;
  str: string = 'Hello world';
  date: Date = new Date();
  float: number = 0.42;

  obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    }
  };

  search:string = '';
  searchField:string = 'title';

  posts: Post[] = [
    {title: 'Beer', text: 'Самое лучшее пиво в мире'},
    {title: 'Bread', text: 'Самое лучшей хлеб в мире'},
    {title: 'Apple', text: 'Самые лучшии яблоки в мире'},
  ];

  addPost() {
    this.posts.unshift({
      title: 'Angular 9',
      text: 'Learn Angular 9'
    });
  }

  //  Pipe async
  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise resolve');
    },4000);
  });

  datE$: Observable<Date> = new Observable(obs => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });
}
