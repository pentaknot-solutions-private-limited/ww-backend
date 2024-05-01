import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
  @ApiProperty({ description: 'Username', type: 'string', example: 'john_doe' })
  @IsString()
  @IsNotEmpty()
  username!: string;

  @ApiProperty({ description: 'Password', type: 'string', example: 'password' })
  @IsString()
  @IsNotEmpty()
  password!: string;
}
