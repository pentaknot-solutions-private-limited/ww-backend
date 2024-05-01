import { Inject, Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Model } from 'mongoose';
import { Payment } from './interfaces/payment.interface';

@Injectable()
export class PaymentService {
  constructor(
    @Inject('PAYMENT_MODEL') private readonly paymentModel: Model<Payment>,
  ) {}

  async create(createPaymentDto: CreatePaymentDto): Promise<Payment> {
    const createdPayment = new this.paymentModel(createPaymentDto);
    return createdPayment.save();
  }

  findAll(): Promise<Payment[]> {
    return this.paymentModel
      .find({ isActive: true })
      .populate(['saleId', 'paymentModeId']) //
      .exec();
    // return this.paymentModel.find({ isActive: true }).exec();
  }

  findSchedule(id: string) {
    return this.paymentModel
      .find({ saleId: id, isActive: true })
      .populate(['saleId', 'paymentModeId']) //
      .exec();
  }

  findOne(id: number) {
    return this.paymentModel.findOne({ _id: id, isActive: true }).exec();
  }

  findLastPayment() {
    return this.paymentModel
      .findOne({}, {}, { sort: { paymentNo: -1 } })
      .exec();
  }

  // Add Payment Dependencies
  findDependencies() {
    // return this.paymentTypeModel.find().exec();
  }

  update(id: number | any, updatePaymentDto: UpdatePaymentDto) {
    return this.paymentModel.findByIdAndUpdate(id, updatePaymentDto).exec();
  }

  async updateIsActive(id: string, isActive: boolean): Promise<Payment> {
    return this.paymentModel.findByIdAndUpdate(id, { isActive }, { new: true });
  }

  delete(id: number) {
    return this.paymentModel.findByIdAndUpdate(id, { isActive: false });
  }
}
