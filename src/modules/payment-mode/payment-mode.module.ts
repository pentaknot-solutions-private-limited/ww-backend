import { Module } from '@nestjs/common';
import { PaymentModeService } from './payment-mode.service';
import { PaymentModeController } from './payment-mode.controller';
import { DatabaseModule } from 'src/database/database.module';
import { paymentModeProviders } from './payment-mode.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PaymentModeController],
  providers: [PaymentModeService, ...paymentModeProviders],
})
export class PaymentModeModule {}
