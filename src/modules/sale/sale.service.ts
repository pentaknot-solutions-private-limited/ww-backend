import { Inject, Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { Model } from 'mongoose';
import { Sale } from './interfaces/sale.interface';

@Injectable()
export class SaleService {
  constructor(@Inject('SALE_MODEL') private readonly saleModel: Model<Sale>) {}

  create(createSaleDto: CreateSaleDto): Promise<Sale> {
    const createdSale = new this.saleModel(createSaleDto);
    return createdSale.save();
  }

  findAll(): Promise<Sale[]> {
    return this.saleModel
      .find({ isActive: true })
      .populate([
        'customerId', 
        'saleStatusId']) // Assuming customerId is the reference to the Customer collection
      .exec();
    // return this.saleModel.find({ isActive: true }).exec();
  }

  findOne(id: number) {
    return this.saleModel.findOne({ _id: id, isActive: true }).exec();
  }

  // Add Sale Dependencies
  findDependencies() {
    // return this.saleTypeModel.find().exec();
  }

  update(id: number | any, updateSaleDto: UpdateSaleDto) {
    return this.saleModel.findByIdAndUpdate(id, updateSaleDto).exec();
  }

  async updateIsActive(id: string, isActive: boolean): Promise<Sale> {
    return this.saleModel.findByIdAndUpdate(id, { isActive }, { new: true });
  }

  delete(id: number) {
    return this.saleModel.findByIdAndUpdate(id, { isActive: false });
  }
}
