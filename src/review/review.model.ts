import {prop} from '@typegoose/typegoose';
import {Base, TimeStamps} from '@typegoose/typegoose/lib/defaultClasses';

// @ts-ignore
// tslint:disable-next-line:no-empty-interface
interface ReviewModel extends Base {}
// @ts-ignore
export class ReviewModel extends TimeStamps {

	@prop()
	name: string;

	@prop()
	title: string;

	@prop()
	description: string;

	@prop()
	rating: number;

	@prop()
	created: Date;
}
