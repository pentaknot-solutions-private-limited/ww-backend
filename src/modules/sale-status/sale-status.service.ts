import { Inject, Injectable } from '@nestjs/common';
import { CreateSaleStatusDto } from './dto/create-sale-status.dto';
import { UpdateSaleStatusDto } from './dto/update-sale-status.dto';
import { Model } from 'mongoose';
import { SaleStatus } from './interfaces/sale-status.interface';

@Injectable()
export class SaleStatusService {
  constructor(@Inject('SALE_STATUS_MODEL') private readonly saleStatusModel: Model<SaleStatus>) {}

  create(createSaleStatusDto: CreateSaleStatusDto): Promise<SaleStatus> {
    const createdSaleStatus = new this.saleStatusModel(createSaleStatusDto);
    return createdSaleStatus.save();
  }

  findAll(): Promise<SaleStatus[]> {
    return this.saleStatusModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} saleStatus`;
  }

  update(id: number, updateSaleStatusDto: UpdateSaleStatusDto) {
    return `This action updates a #${id} saleStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} saleStatus`;
  }
}
