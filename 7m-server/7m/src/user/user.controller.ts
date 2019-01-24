import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserCreateRequest } from '../dtos/user';
import { validateRequest } from '../utils/validation';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  async create(@Body() createUser) {
    const validRes = validateRequest(createUser, UserCreateRequest);
    if (validRes.isValid) {
      await this.userService.create(createUser);
    } else {
      return validRes.errors;
    }
  }
}
