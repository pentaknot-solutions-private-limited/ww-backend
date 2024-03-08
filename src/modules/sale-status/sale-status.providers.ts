import { Mongoose } from 'mongoose';
import { SaleStatusSchema } from './schemas/sale-status.schema';

export const saleStatusProviders = [
  {
    provide: 'SALE_STATUS_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('SaleStatus', SaleStatusSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
