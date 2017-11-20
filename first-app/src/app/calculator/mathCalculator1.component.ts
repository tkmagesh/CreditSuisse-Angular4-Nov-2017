import { Component } from '@angular/core'

import { MathCalculatorModel } from './MathCalculatorModel';

@Component({
	selector : 'math-calculator-1',
	templateUrl : 'mathCalculator1.component.html'
})
export class MathCalculator1Component{
	//result : number = 0;

	model : MathCalculatorModel = null;

	
	constructor(){
		this.model = new MathCalculatorModel();
	}

}