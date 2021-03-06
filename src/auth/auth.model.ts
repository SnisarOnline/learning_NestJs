import {prop} from '@typegoose/typegoose';
import {Base, TimeStamps} from '@typegoose/typegoose/lib/defaultClasses';

// @ts-ignore
// tslint:disable-next-line:no-empty-interface
interface AuthModel extends Base {}
// @ts-ignore
export class AuthModel extends TimeStamps {
	@prop({unique: true})
	email: string;

	@prop()
	passwordHash: string;
}
