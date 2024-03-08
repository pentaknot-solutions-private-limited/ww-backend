import { Inject, Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Model } from 'mongoose';
import { Customer } from './interfaces/customer.interface';
import { CustomerType } from '../customer-type/interfaces/customer-type.interface';

@Injectable()
export class CustomerService {
  constructor(
    @Inject('CUSTOMER_MODEL') private readonly customerModel: Model<Customer>,
  ) {}

  create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const createdCustomer = new this.customerModel(createCustomerDto);
    return createdCustomer.save();
  }

  findAll(): Promise<Customer[]> {
    return this.customerModel.find({ isActive: true }).exec();
  }

  findOne(id: number) {
    return this.customerModel.findOne({ _id: id, isActive: true }).exec();
  }

  // Add Customer Dependencies
  findDependencies() {
    // return this.customerTypeModel.find().exec();
  }

  update(id: number | any, updateCustomerDto: UpdateCustomerDto) {
    return this.customerModel
      .findByIdAndUpdate(id, updateCustomerDto)
      .exec();
  }

  async updateIsActive(id: string, isActive: boolean): Promise<Customer> {
    return this.customerModel.findByIdAndUpdate(
      id,
      { isActive },
      { new: true },
    );
  }

  delete(id: number) {
    return this.customerModel.findByIdAndUpdate(id, { isActive: false });
  }
}
