import { Module } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { DatabaseModule } from 'src/database/database.module';
import { saleProviders } from './sale.providers';
import { CustomerService } from '../customer/customer.service';
import { customerProviders } from '../customer/customer.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [SaleController],
  providers: [
    SaleService,
    ...saleProviders,
    CustomerService,
    ...customerProviders,
  ],
})
export class SaleModule {}
