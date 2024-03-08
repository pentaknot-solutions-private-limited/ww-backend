import { Module } from '@nestjs/common';
import { SalutationService } from './salutation.service';
import { SalutationController } from './salutation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from 'src/database/database.module';
import { salutationProviders } from './salutation.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [SalutationController],
  providers: [SalutationService, ...salutationProviders],
})
export class SalutationModule {}
