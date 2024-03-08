import { Module } from '@nestjs/common';
import { CustomerTypeService } from './customer-type.service';
import { CustomerTypeController } from './customer-type.controller';
import { DatabaseModule } from 'src/database/database.module';
import { customerTypeProviders } from './customer-type.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CustomerTypeController],
  providers: [CustomerTypeService, ...customerTypeProviders],
})
export class CustomerTypeModule {}
