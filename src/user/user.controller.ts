import { Controller, Post, Body, Query, Get, Version, VERSION_NEUTRAL } from '@nestjs/common';
import { UserService } from './user.service';
import { AddUserDto } from './user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('�û�')
@Controller({
  path: 'user',
  version: [VERSION_NEUTRAL]
})
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) { }

  @ApiOperation({
    summary: '�����û�',
  })
  @Post('/add')
  create(@Body() user: AddUserDto) {
    return this.userService.createOrSave(user);
  }
}
