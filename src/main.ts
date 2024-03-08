import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { UserModule } from './modules/user/user.module';
import { SalutationModule } from './modules/salutation/salutation.module';
import { CustomerTypeModule } from './modules/customer-type/customer-type.module';
import { StateModule } from './modules/state/state.module';
import { CustomerModule } from './modules/customer/customer.module';
import { AuthModule } from './modules/auth/auth.module';
import { SaleModule } from './modules/sale/sale.module';
import { SaleStatusModule } from './modules/sale-status/sale-status.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('WW Invoicer')
    .setDescription('The WW invoicer API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    include: [
      AuthModule,
      UserModule,
      SalutationModule,
      CustomerTypeModule,
      StateModule,
      CustomerModule,
      SaleModule,
      SaleStatusModule,
    ],
  });
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
