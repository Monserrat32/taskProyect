import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { LineThroughTextDirective } from './line-through-text.directive';

@Component({
  template: '<p [appHighlight]="shouldHighlight">Sample Text</p>',
})
class TestComponent {
  shouldHighlight = false;
}

describe('LineThroughTextDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, LineThroughTextDirective],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should not have text-decoration when appHighlight is false', () => {
    component.shouldHighlight = false;
    fixture.detectChanges();

    const paragraph = debugElement.nativeElement.querySelector('p');
    expect(paragraph.style.textDecoration).toBeFalsy();
  });

  it('should have text-decoration line-through when appHighlight is true', () => {
    component.shouldHighlight = true;
    fixture.detectChanges();

    const paragraph = debugElement.nativeElement.querySelector('p');
    expect(paragraph.style.textDecoration).toBe('line-through');
  });
});
