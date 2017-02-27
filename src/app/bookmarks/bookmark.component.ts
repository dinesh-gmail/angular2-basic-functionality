import { Component, Output, EventEmitter } from '@angular/core';
import { BookmarkService } from './bookmark.service';

@Component({
	selector: 'bookmarks',
	providers: [BookmarkService],
	template: `
		<div class="panel panel-default">
			<bookmark-edit (save)="saveBookmark($event)" 
				[saveStatus]="dataSave"
				[bookmark]="bookmarkObjForEdit"></bookmark-edit>
			<bookmark-list [bookmarks]="bookmarks" 
				(delete)="deleteBookmark($event)" 
				(edit)="populateInputsForEdit($event)"></bookmark-list>
		</div>
	`,
	styles : [`

	`]
})

export class BookmarksComponent {
	bookmarks = [];
	dataSave = {};
	bookmarkObjForEdit = {};
	
	constructor(private bookmarkService: BookmarkService) {
		this.reload();
	}

	saveBookmark(bookmark) {
		console.log('Received bookmark', bookmark);
		this.bookmarkService.createBookmark(bookmark)
			.then(response => {
				if ( response ) {
					this.dataSave.status = 'success';
					if ( bookmark.id ) {
						this.dataSave.message = 'Bookmark updated successfully.';
					}
					else {
						this.dataSave.message = 'Bookmark saved successfully.';
					}
				}

				this.reload();
				this.bookmarkObjForEdit = {};
			})
			.catch(error => {
				this.dataSave.status = 'failure';
				this.dataSave.message = 'Failure : ' + error;
			})
	}

	deleteBookmark(bookmark) {
		console.log('received ', bookmark.id);
		this.bookmarkService.deleteBookmark(bookmark.id)
			.then(response => {
				this.dataSave.status = 'success';
				this.dataSave.message = 'Bookmark deleted successfully.';
				this.reload();
			})
			.catch(error => {
				this.dataSave.status = 'failure';
				this.dataSave.message = 'Failure : ' + error;
			})
	}

	populateInputsForEdit( bookmark ) {
		this.bookmarkObjForEdit = Object.assign({}, bookmark);
	}

	reload() {
		this.bookmarkService.getBookmarks()
			.then(bookmarks => this.bookmarks = bookmarks);
	}
}