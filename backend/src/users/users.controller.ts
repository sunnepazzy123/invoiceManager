import { Controller, Get, Param, Req, UseGuards, } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtGuard } from 'src/guards/jwt.guard';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {
    constructor(private usersService: UsersService) {}


    @UseGuards(JwtGuard)
    @Get('/')
    async getUsers(@Req() req) {
      const users = await this.usersService.find()
      return users
    }

    @UseGuards(JwtGuard)
    @Get('/:id')
    async getUser(@Req() req, @Param('id') id: string) {
        const user = await this.usersService.findById(id)
        return user
    }
}
