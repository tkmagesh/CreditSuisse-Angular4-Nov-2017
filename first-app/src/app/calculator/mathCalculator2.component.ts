import { Component } from '@angular/core';
import { MathCalculatorModel } from './MathCalculatorModel';

@Component({
	selector : 'math-calculator-2',
	templateUrl : 'mathCalculator2.component.html'
})
export class MathCalculator2Component{
	model : MathCalculatorModel = new MathCalculatorModel();

	operator : string = '';

	calculate(){
		switch (this.operator) {
			case "add":
				this.model.add();
				break;
			case "subtract":
				this.model.subtract();
				break;
			case "multiply":
				this.model.multiply();
				break;
			case "divide":
				this.model.divide();
				break;
		}
	}

}