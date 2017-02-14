import { CARPARTS } from './mocks';
import { Injector }	from '@angular/core';

@Injectable()
export class RacingDataService {
	getCarParts(){
		return CARPARTS;
	}
}