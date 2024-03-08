import { Mongoose } from 'mongoose';
import { SalutationSchema } from './schemas/salutation.schema';

export const salutationProviders = [
  {
    provide: 'SALUTATION_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Salutation', SalutationSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
