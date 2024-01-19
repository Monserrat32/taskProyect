import {Directive, ElementRef, Renderer2,Input,SimpleChanges} from '@angular/core';
@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class LineThroughTextDirective  {
 
  constructor(private el: ElementRef,private renderer: Renderer2) {}
  @Input() appHighlight = '';
   
  ngOnChanges(changes: SimpleChanges): void {
    this.updateStrikeThrough();
  }

  private updateStrikeThrough(): void {
    if (this.appHighlight) {
      this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'line-through');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'text-decoration');
    }
  }

}
