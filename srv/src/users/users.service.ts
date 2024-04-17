import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './users.entity';
import { Repository } from 'typeorm';
import { createPaginationLinks } from './users.util';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    @InjectRepository(UsersEntity)
    private usersRepo: Repository<UsersEntity>,
  ) {}

  // get list of all users
  async findAll(page = 1, limit = 20): Promise<{ data: UsersEntity[]; meta: object }> {
    const [data, total] = await this.usersRepo.findAndCount({
      skip: page > 0 ? (page - 1) * limit : 0,
      take: limit,
    });

    const meta = {
      total,
      page,
      limit,
      links: createPaginationLinks(page, limit, total),
    };

    return {
      data,
      meta,
    };
  }
}
