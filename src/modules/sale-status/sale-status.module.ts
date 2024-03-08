import { Module } from '@nestjs/common';
import { SaleStatusService } from './sale-status.service';
import { SaleStatusController } from './sale-status.controller';
import { DatabaseModule } from 'src/database/database.module';
import { saleStatusProviders } from './sale-status.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [SaleStatusController],
  providers: [SaleStatusService, ...saleStatusProviders],
})
export class SaleStatusModule {}
