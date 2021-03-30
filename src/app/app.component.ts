import { Component } from '@angular/core';

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
  posts: Post[] = [
    {title: 'Хочу выучить Angular', text: 'Я все еще учу компоненты', id: 1},
    {title: 'Cледующий блок', text: 'Будет про дерективы и про пайпы', id: 2},
    {title: 'Хочу выучить Angular', text: 'Я все еще учу компоненты', id: 3}
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }

  removePost(id: number) {
    console.log('id to remove', id);
    this.posts = this.posts.filter(p => p.id !== id);
  }
}
