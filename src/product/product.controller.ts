import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post} from '@nestjs/common';
import {ProductModel} from './product.model';
import {FindProductDto} from './dto/find-product.dto';

@Controller('product')
export class ProductController {

	// constructor(
	// 	private readonly configService: ConfigService
	// ) {
	// 	this.configService.get('TEST');
	// }

	@Post('create')
	async create(@Body() dto: Omit<ProductModel, '_id'>) {
	}

	@Get(':id')
	async get(@Param('id') id: string) {
	}

	@Delete(':id')
	async delete(@Param('id') id: string) {
	}

	// обновление продукта.
	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: ProductModel) {
	}

	@HttpCode(HttpStatus.OK)
	@Post()
	async find(@Body() dto: FindProductDto) {
	}
}
