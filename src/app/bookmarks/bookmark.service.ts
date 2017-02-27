import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookmarkService {
	
	private baseUrl = 'https://angular2-course-e78e1.firebaseio.com/';

	constructor(private http : Http) { }

	getBookmarks() {
		return this.http.get(`${this.baseUrl}/bookmarks.json`)
			.toPromise()
			.then( response => this.convert(response.json()));
	}

	createBookmark(bookmark) {
		if ( bookmark.id ) {
			const json = JSON.stringify({
				title : bookmark.title,
				url : bookmark.url
			});

			return this.http.patch(`${this.baseUrl}/bookmarks/${bookmark.id}.json`, json)
			.toPromise()
			.then( response => response.json());
		}
		else {
			return this.http.post(`${this.baseUrl}/bookmarks.json`, bookmark)
			.toPromise()
			.then( response => response.json());
		}
	}

	deleteBookmark(bookmarkId) {
		return this.http.delete(`${this.baseUrl}/bookmarks/${bookmarkId}.json`)
			.toPromise()
			.then( response => response.json());
	}

	private convert(parsedResponse) {
		return Object.keys(parsedResponse)
			.map( id => ({
				id : id,
				title : parsedResponse[id].title,
				url : parsedResponse[id].url
			}))
			.sort((a, b) => a.title.localeCompare(b.title));
	}
}