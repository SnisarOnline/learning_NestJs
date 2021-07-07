import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {ReviewModel} from './review.model';

@Controller('review')
export class ReviewController {
	// constructor(
	// 	private readonly configService: ConfigService
	// ) {
	// 	this.configService.get('TEST');
	// }

	@Post('create')
	async create(@Body() dto: Omit<ReviewModel, '_id'>) {
	}


	@Delete(':id')
	async delete(@Param('id') id: string) {
	}


	@Get('byProduct/:productId')
	async get(@Param('productId') productId: string) {
	}

}
