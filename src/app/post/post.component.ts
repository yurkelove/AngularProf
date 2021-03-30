import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ContentChild,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Output, EventEmitter
} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements
  OnInit,
  OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() post: Post;
  @Output() onRemove = new EventEmitter<number>();
  @ContentChild('info', {static: true}) infoRef: ElementRef;

  removePost() {
    this.onRemove.emit(this.post.id);
  }

  constructor() {
    // console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges):void {
    console.log('onChanges', changes);
  }

  ngOnInit() {
    console.log('ngOnInit');
    // console.log(this.infoRef.nativeElement);
  }

  ngDoCheck():void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit():void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked():void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit():void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked():void {
    console.log('ngAfterViewInit');
  }

  ngOnDestroy():void {
    console.log('ngOnDestroy');
  }

}
