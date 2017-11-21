import { Component, Input } from '@angular/core';

@Component({
	selector : 'math-result',
	template : `
		<div [ngClass]="{positive : result >= 0, negative : result < 0}">{{result}}</div>
	`,
	styles : ['.positive{ color : green;}', '.negative{color : red;}']

})
export class MathResultComponent{

	@Input('data') 
	result : number = 0;

}