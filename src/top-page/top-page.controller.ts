import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post} from '@nestjs/common';
import {TopPageModel} from './top-page.model';
import {FindTopPageDto} from './dto/top-page.dto';

@Controller('top-page')
export class TopPageController {
	// constructor(
	// 	private readonly configService: ConfigService
	// ) {
	// 	this.configService.get('TEST');
	// }

	@Post('create')
	async create(@Body() dto: Omit<TopPageModel, '_id'>) {
	}

	@Get(':id')
	async get(@Param('id') id: string) {
	}

	@Delete(':id')
	async delete(@Param('id') id: string) {
	}

	// обновление продукта.
	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: TopPageModel) {
	}

	@HttpCode(HttpStatus.OK)
	@Post()
	async find(@Body() dto: FindTopPageDto) {
	}
}
