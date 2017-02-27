import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
	selector : 'bookmark-list',
	templateUrl : 'bookmarks-list.html'
})

export class BookmarklistComponent {
	@Input() bookmarks;
	@Output() delete = new EventEmitter();
	@Output() edit = new EventEmitter();

	notifyParentForDelete( bookmark ) {
		this.delete.emit(bookmark);
	}

	onEdit( bookmark ) {
		this.edit.emit(bookmark);
	}
}