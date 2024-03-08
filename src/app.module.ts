import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SalutationModule } from './modules/salutation/salutation.module';
import { CustomerTypeModule } from './modules/customer-type/customer-type.module';
import { StateModule } from './modules/state/state.module';
import { CustomerModule } from './modules/customer/customer.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import { AuthModule } from './modules/auth/auth.module';
import { SaleModule } from './modules/sale/sale.module';
import { SaleStatusModule } from './modules/sale-status/sale-status.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    SalutationModule,
    CustomerTypeModule,
    StateModule,
    CustomerModule,
    SaleModule,
    SaleStatusModule,
    MongooseModule.forRoot(
      `mongodb+srv://ww-admin:bKhEuEex62h1yIgr@cluster0.dvto8iz.mongodb.net/ww-invoicer-db`,
    ),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
