import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(
        'mongodb+srv://ww-admin:bKhEuEex62h1yIgr@cluster0.dvto8iz.mongodb.net/ww-invoicer-db',
      ),
  },
];
