import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name : 'fixedDecimal'
})

export class FixedPipe implements PipeTransform {
	transform(value: number, digits: number = 2) {
		return value.toFixed(digits);
	}
}