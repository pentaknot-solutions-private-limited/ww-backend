import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from './user.providers';
import { AuthGuard } from '../auth/auth.guard';

@Module({
  imports: [DatabaseModule],
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService, ...userProviders, AuthGuard],
})
export class UserModule {}
