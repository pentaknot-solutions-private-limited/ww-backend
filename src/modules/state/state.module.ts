import { Module } from '@nestjs/common';
import { StateService } from './state.service';
import { StateController } from './state.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from 'src/database/database.module';
import { stateProviders } from './state.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [StateController],
  providers: [StateService, ...stateProviders],
})
export class StateModule {}
