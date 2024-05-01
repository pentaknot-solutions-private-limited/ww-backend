import { Inject, Injectable } from '@nestjs/common';
import { CreatePaymentModeDto } from './dto/create-payment-mode.dto';
import { UpdatePaymentModeDto } from './dto/update-payment-mode.dto';
import { Model } from 'mongoose';
import { PaymentMode } from './interfaces/payment-mode.interface';

@Injectable()
export class PaymentModeService {
  constructor(
    @Inject('PAYMENT_MODE_MODEL')
    private readonly paymentModeModel: Model<PaymentMode>,
  ) {}

  create(createPaymentModeDto: CreatePaymentModeDto): Promise<PaymentMode> {
    const createdPaymentMode = new this.paymentModeModel(createPaymentModeDto);
    return createdPaymentMode.save();
  }

  findAll(): Promise<PaymentMode[]> {
    return this.paymentModeModel.find().exec();
  }

  findOne(id: number) {
    return this.paymentModeModel.findOne({ _id: id }).exec();
  }

  update(id: number, updatePaymentModeDto: UpdatePaymentModeDto) {
    console.log('updatePaymentModeDto', updatePaymentModeDto);
    return `This action updates a #${id} paymentMode`;
  }

  async remove(id: number) {
    console.log('id', id);
    const deleted = '';
    // await this.paymentModeModel
    //   .findByIdAndRemove({ _id: id })
    //   .exec();
    return deleted;
  }
}
