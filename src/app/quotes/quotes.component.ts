import { Component } from '@angular/core';

@Component({
	selector: 'quotes',
	template : `
		<br />
		<p>Result : <strong>{{result}}</strong></p>
		<p>Time : <strong>{{time}}</strong></p>
		<p>Error : <strong>{{error}}</strong></p>
	`
})
export class QuotesComponent {
	result;
	error;
	time;

	constructor() {
		const startTime = Date.now();
		this.add(5, 2)
		.then( result => this.add(result, -10))
		.then( result => this.add(result, 1), error => 0)
		.then( result => {
			this.result = result;
			this.time = Date.now() - startTime;
		}).catch(error => this.error = error );
	}

	add(x, y): Promise<number> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const result = x + y;
					if (result >= 0) {
						resolve(result);
					}
					else {
						reject('Error ' + result);
					}
			}, 100);
		});
	}
}