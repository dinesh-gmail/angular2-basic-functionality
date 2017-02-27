import { Directive, ElementRef, Input, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
	selector: '[myModel]'
})

export class MyModelDirective {

	@Output() myModelChange = new EventEmitter();

	private element: HTMLInputElement;

	constructor(elementRef : ElementRef) {
		this.element = elementRef.nativeElement;
	}

	@Input() set myModel(value) {
		this.element.value = value;
	}

	@HostListener('input') onInput() {
		this.myModelChange.emit(this.element.value);
	}
}