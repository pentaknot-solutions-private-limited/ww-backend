import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { DatabaseModule } from 'src/database/database.module';
import { paymentProviders } from './payment.providers';
import { PaymentModeService } from '../payment-mode/payment-mode.service';
import { paymentModeProviders } from '../payment-mode/payment-mode.providers';
import { SaleModule } from '../sale/sale.module';
import { SaleService } from '../sale/sale.service';
import { saleProviders } from '../sale/sale.providers';

@Module({
  imports: [DatabaseModule, SaleModule],
  controllers: [PaymentController],
  providers: [
    PaymentService,
    ...paymentProviders,
    PaymentModeService,
    ...paymentModeProviders,
    SaleService,
    ...saleProviders,
  ],
})
export class PaymentModule {}
