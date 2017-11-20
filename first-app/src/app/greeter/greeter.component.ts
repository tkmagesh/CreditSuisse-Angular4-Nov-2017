import { Component } from '@angular/core'

@Component({
	selector : 'greeter',
	template : `
		<label>Name :</label>
		<input type="text" #txtName />
		<input type="button" value="Greet" (click)="onGreetClick(txtName.value)"/>
		<div>{{greetMsg}}</div>
	`
})
export class GreeterComponent{
	greetMsg : string = `Welcome to Angular World!!`;

	onGreetClick(username){
		this.greetMsg = 'Hi ' + username + ', Welcome to Angular World';
	}
}