import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})

export class StyleDirective {
  @Input('appStyle') color: string = 'blue';
  @Input() fontWeight = 'normal';
  @Input() dStyles: {border?: string, fontWeight?: string, borderRadius?: string};

  @HostBinding('style.color') elColor = null;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event);
  }

  @HostListener('mouseenter') onEnter() {
    this.elColor = this.color;

    this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.color);
    this.renderer.setStyle(this.elementRef.nativeElement, 'fontWeight', this.fontWeight);
    this.renderer.setStyle(this.elementRef.nativeElement, 'fontWeight', this.dStyles.fontWeight);
    this.renderer.setStyle(this.elementRef.nativeElement, 'borderRadius', this.dStyles.borderRadius);
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', this.dStyles.border);
  }

  @HostListener('mouseleave') onLeave() {
    this.elColor = null;

    this.renderer.setStyle(this.elementRef.nativeElement, 'color', null);
    this.renderer.setStyle(this.elementRef.nativeElement, 'fontWeight', null);
    this.renderer.setStyle(this.elementRef.nativeElement, 'fontWeight', null);
    this.renderer.setStyle(this.elementRef.nativeElement, 'borderRadius', null);
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', null);
  }
}

// ng g d directives/style3 --skipTest
