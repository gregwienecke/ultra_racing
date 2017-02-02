import { Component } 	from '@angular/core';
import { CarPart }		from './car-part.ts';
import { CARPARTS } 	from './mocks';


@Component({
	selector: 'car-parts',
	templateUrl: 'app/car-parts.component.html',
	styleUrls: ['app/car-parts.component.css']
})
export class CarPartsComponent {
	carParts: CarPart[]; //why do we need this line?

	ngOnInit(){
		this.carParts = CARPARTS;
	}

	totalCarParts(){
		let sum = 0;
		for (let carPart of this.carParts) {
			sum += carPart.inStock;
		}
		return sum;
	}
}