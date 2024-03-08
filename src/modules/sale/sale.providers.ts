import { Mongoose } from 'mongoose';
import { SaleSchema } from './schemas/sale.schema';

export const saleProviders = [
  {
    provide: 'SALE_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Sale', SaleSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
