import { Component } from '@angular/core';
import { ExchangeService } from './exchange.service';

@Component({
	selector : 'currency-converter',
	providers : [ExchangeService],
	styles : [`
		input[type=number] {
			width: 10ex;
			text-align: right;
		}
		.error {
			border: 1px solid red;
		} 
	`],
	templateUrl : 'currency-converter.html'
})

export class CurrencyConverter {
	baseAmount = 1;
	baseCurrency = 'USD';
	targetCurrency = 'GBP';
	private exchangeService;

	constructor(private exchangeService : ExchangeService) {
		this.exchangeService = exchangeService;
	}

	get targetAmountValue() {
		const exchangeRate = this.exchangeService
			.getExchangeRate(this.baseCurrency, this.targetCurrency);
		return (this.baseAmount * exchangeRate);
	}

	isBaseAmountInvalid() {
		return !Number.isFinite(this.baseAmount);
	}
}
