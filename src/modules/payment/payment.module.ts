import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { DatabaseModule } from 'src/database/database.module';
import { paymentProviders } from './payment.providers';
import { PaymentModeService } from '../payment-mode/payment-mode.service';
import { paymentModeProviders } from '../payment-mode/payment-mode.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PaymentController],
  providers: [
    PaymentService,
    ...paymentProviders,
    PaymentModeService,
    ...paymentModeProviders,
  ],
})
export class PaymentModule {}
