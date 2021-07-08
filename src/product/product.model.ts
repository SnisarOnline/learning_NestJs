import {prop} from '@typegoose/typegoose';
import {Base, TimeStamps} from '@typegoose/typegoose/lib/defaultClasses';

// @ts-ignore
// tslint:disable-next-line:no-empty-interface
interface ProductModel extends Base {}
// @ts-ignore
export class ProductModel extends TimeStamps {

	@prop()
	image: string;

	@prop()
	title: string;

	@prop()
	price: number;

	@prop()
	oldPrice: number;

	@prop()
	credit: number;

	@prop()
	calculatedRating: number;

	@prop()
	description: string;

	@prop()
	advantages: string;

	@prop() // отзывы
	disAdvantages: string;

	@prop({type: () => [String]})
	categories: string[]; // отрицательные отзывы

	@prop({type: () => [String]})
	tags: string[];

	@prop({type: () => [ProductCharacteristic], _id: false})
	characteristics: ProductCharacteristic[];
}

class ProductCharacteristic {
	@prop()
	name: string;

	@prop()
	image: string;
}
