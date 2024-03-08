import { Inject, Injectable } from '@nestjs/common';
import { CreateCustomerTypeDto } from './dto/create-customer-type.dto';
import { UpdateCustomerTypeDto } from './dto/update-customer-type.dto';
import { Model } from 'mongoose';
import { CustomerType } from './interfaces/customer-type.interface';

@Injectable()
export class CustomerTypeService {
  constructor(
    @Inject('CUSTOMER_TYPE_MODEL')
    private readonly customerTypeModel: Model<CustomerType>,
  ) {}

  create(createCustomerTypeDto: CreateCustomerTypeDto): Promise<CustomerType> {
    const createdCustomerType = new this.customerTypeModel(
      createCustomerTypeDto,
    );
    return createdCustomerType.save();
  }

  findAll(): Promise<CustomerType[]> {
    return this.customerTypeModel.find().exec();
  }

  findOne(id: number) {
    return this.customerTypeModel.findOne({ _id: id }).exec();
  }

  update(id: number, updateCustomerTypeDto: UpdateCustomerTypeDto) {
    return `This action updates a #${id} customerType`;
  }

  async remove(id: number) {
    const deleted = '';
    // await this.customerTypeModel
    //   .findByIdAndRemove({ _id: id })
    //   .exec();
    return deleted;
  }
}
