import {prop} from '@typegoose/typegoose';

export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products
}

export class Hhdata {
	@prop()
	count: number;

	@prop()
	juniorSalary: number;

	@prop()
	middleSalary: number;

	@prop()
	seniorSalary: number;
}

export class TopPageModelAdvantage {
	@prop()
	title: string;

	@prop()
	description: string;
}



export class TopPageModel {
	@prop({enum: TopLevelCategory})
	firstCategory: TopLevelCategory;

	@prop()
	secondCategory: string;

	@prop()
	title: string;

	@prop()
	category: string;

	@prop()
	hh?: Hhdata;

	@prop({type: () => [TopPageModelAdvantage]})
	advantages: TopPageModelAdvantage[];

	@prop()
	seoText: string;

	@prop()
	tagsTitle: string;

	@prop({type: () => [String]})
	tags: string[];
}
