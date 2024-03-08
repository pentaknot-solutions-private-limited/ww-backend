import { Mongoose } from 'mongoose';
import { StateSchema } from './schemas/state.schema';

export const stateProviders = [
  {
    provide: 'STATE_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('State', StateSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
