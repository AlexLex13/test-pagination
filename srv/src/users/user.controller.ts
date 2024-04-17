import { UserService } from './users.service';
import { Controller, Get, Query, Logger } from '@nestjs/common';
// import { UsersResponseDto } from './users.response.dto';

@Controller('users')
export class UserController {
  private readonly logger = new Logger(UserController.name);
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers(@Query('page') page: number, @Query('limit') limit: number) {
    this.logger.log('Get all users');
    return await this.userService.findAll(page, limit);
    // return users.map((user) => UsersResponseDto.fromUsersEntity(user));
  }
}
