import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class AddUserDto {
  @ApiProperty({ example: 1234 })
  id?: string;

  @ApiProperty({ example: 'yongjunwang' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'wangyj641@gmail.com' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'wangyj' })
  @IsNotEmpty()
  username: string;
}
