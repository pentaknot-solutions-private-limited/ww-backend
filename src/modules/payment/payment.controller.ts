import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { ApiTags } from '@nestjs/swagger';
import { CustomerService } from '../customer/customer.service';
import { PaymentModeService } from '../payment-mode/payment-mode.service';

@ApiTags('payment')
@Controller('payment')
export class PaymentController {
  constructor(
    private readonly paymentService: PaymentService,
    private paymentModeService: PaymentModeService,
  ) {}

  @Post()
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.create(createPaymentDto);
  }

  @Get()
  findAll() {
    return this.paymentService.findAll();
  }

  @Get('dependencies')
  async findDependencies() {
    try {
      const lastPayment = await this.paymentService.findLastPayment();
      return {
        paymentModes: (await this.paymentModeService.findAll()) || [],
        lastPaymentNo: lastPayment?.paymentNo || 0,
      };
    } catch (err) {}
  }

  @Get('schedule/:saleId')
  findSchedule(@Param('saleId') saleId: string) {
    return this.paymentService.findSchedule(saleId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentDto: UpdatePaymentDto) {
    return this.paymentService.update(
      // +
      id,
      updatePaymentDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return this.paymentService.delete(+id);
    return this.paymentService.updateIsActive(id, false);
  }
}
