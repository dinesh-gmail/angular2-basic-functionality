import 'rxjs/add/operator/toPromise';
// import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Quote } from './quotes.model';

@Injectable()
export class QuotesService {

	constructor( private http: Http ) { }

	getQuoteOfTheDay(): Promise<Quote> {
		// converts the observable returned by http get into a promise.
		return this.http.get('/assets/quote.json').toPromise()
			.then(response => response.json())
			.catch(error => console.log('Error: ', error));
	}
}