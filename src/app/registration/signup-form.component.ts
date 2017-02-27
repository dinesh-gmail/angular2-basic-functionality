import { Component } from  '@angular/core';
import { NgModel, NgForm} from '@angular/forms';

@Component({
	selector: 'signup-form',
	styles: [`
		form {
			width: 30%;
			margin: 30px auto;
		}
		input.ng-dirty.ng-invalid {
			border : 1px solid red;
		}

		input.ng-dirty.ng-valid {
			border : 1px solid green;
		}
	`],
	templateUrl : 'signup-form.html'
})

export class SignupFormComponent {
	email = '';

	onSubmit(form: NgForm) {
		console.log('Email', form);
	}

	handleFormReset(form: NgForm) {
		form.resetForm();
	}
}