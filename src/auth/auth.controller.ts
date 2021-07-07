import {Body, Controller, HttpCode, HttpStatus, Post} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {AuthDto} from './dto/auth.dto';

@Controller('auth')
export class AuthController {
	// constructor(
	// 	private readonly configService: ConfigService
	// ) {
	// 	// this.configService.get('TEST');
	// }

	@HttpCode(HttpStatus.CREATED) // Если не указывать то по умолчанию всегда 201 код.
	@Post('register')
	async register(@Body() dto: AuthDto) {
	}

	@HttpCode(HttpStatus.OK)
	@Post('login')
	async login(@Body() dto: AuthDto) {
	}
}
