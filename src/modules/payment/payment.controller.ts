import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { PaymentModeService } from '../payment-mode/payment-mode.service';
import { SaleService } from '../sale/sale.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PaymentService } from './payment.service';

@ApiTags('payment')
@Controller('payment')
export class PaymentController {
  constructor(
    private readonly paymentService: PaymentService,
    private readonly saleService: SaleService,
    private paymentModeService: PaymentModeService,
  ) {}

  @Post()
  @ApiBody({ type: CreatePaymentDto })
  async create(@Body() createPaymentDto: CreatePaymentDto) {
    try {
      const data = await this.paymentService.create(createPaymentDto);
      // fetch the sale details using the saleId
      const salesData = await this.saleService.findOne(createPaymentDto.saleId);
      // if the payment is the final payment, update the sale status to Paid
      if (salesData?.totalAmount === createPaymentDto.amountReceived) {
        await this.saleService.update(createPaymentDto.saleId, {
          saleStatusId: '65e707c2c1e1cd3be6832afe',
        });
      }
      // if the payment is partial payment, update the sale status to Partially Paid
      if (salesData?.totalAmount !== createPaymentDto.amountReceived) {
        await this.saleService.update(createPaymentDto.saleId, {
          saleStatusId: '65e707c9c1e1cd3be6832aff',
        });
      }

      return data;
    } catch (error) {
      throw error('Cannot update the payment');
    }
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
