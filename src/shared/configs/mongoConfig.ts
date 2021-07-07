import {ConfigService} from '@nestjs/config';
import {TypegooseModuleOptions} from 'nestjs-typegoose/dist/typegoose-options.interface';

export const getMongoConfig = async (confirmService: ConfigService): Promise<TypegooseModuleOptions> => {
	return {
		uri: getMongoString(confirmService),
		...getMongoOptions()
	};
};

const getMongoString = (confirmService: ConfigService): string => {
	let urlConnectMongo = 'mongodb://';

	if (confirmService.get('MONGO_LOGIN')) {
		const userAccessBd = `${
			confirmService.get('MONGO_LOGIN')}:${
			confirmService.get('MONGO_PASSWORD')}@$`;
		urlConnectMongo = urlConnectMongo + userAccessBd;
	}

	urlConnectMongo = urlConnectMongo + `${
		confirmService.get('MONGO_HOST')}:${
		confirmService.get('MONGO_PORT')}/${
		confirmService.get('MONGO_AUTH_DATABASE')}`;

	// console.log('urlConnectMongo : ', urlConnectMongo);
	return urlConnectMongo;
};
const getMongoOptions = () => ({
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
});
