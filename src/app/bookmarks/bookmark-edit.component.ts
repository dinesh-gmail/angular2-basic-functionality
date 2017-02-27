import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
	selector: 'bookmark-edit',
	templateUrl: 'bookmark-edit.html',
	styles : [`
	`]
})

export class BookmarkEditComponent {

	@Input() bookmark = {};
	@Input() saveStatus;

	@Output() save = new EventEmitter();

	onSave() {
		this.save.emit(this.bookmark);
	}

	populateInputs( inputFieldValues ) {
		console.log(inputFieldValues);
	}
}