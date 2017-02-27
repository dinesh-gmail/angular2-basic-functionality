import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector : 'currency-select',
	template : `
		<select [ngModel]="selected" (ngModelChange)="emitCurrencyChangeEvent($event)">
			<option *ngFor="let currency of supportedCurrencies" [value]="currency">
				{{currency}}
			</option>
		</select>
	`
})

export class CurrencySelectComponent {
	@Input() selected : string;
	@Output() onCurrencyChange = new EventEmitter<string>();

	supportedCurrencies = ['EUR', 'GBP', 'USD'];

	emitCurrencyChangeEvent(selectedValue) {
		this.onCurrencyChange.emit(selectedValue);
	}
}
