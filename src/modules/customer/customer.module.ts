import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { DatabaseModule } from 'src/database/database.module';
import { customerProviders } from './customer.providers';
import { CustomerTypeService } from '../customer-type/customer-type.service';
import { customerTypeProviders } from '../customer-type/customer-type.providers';
import { SalutationService } from '../salutation/salutation.service';
import { salutationProviders } from '../salutation/salutation.providers';
import { StateService } from '../state/state.service';
import { stateProviders } from '../state/state.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CustomerController],
  providers: [
    CustomerService,
    ...customerProviders,
    // Dependencies
    CustomerTypeService,
    ...customerTypeProviders,
    SalutationService,
    ...salutationProviders,
    StateService,
    ...stateProviders,
  ],
})
export class CustomerModule {}
