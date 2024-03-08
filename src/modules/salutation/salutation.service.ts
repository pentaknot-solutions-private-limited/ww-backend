import { Inject, Injectable } from '@nestjs/common';
import { CreateSalutationDto } from './dto/create-salutation.dto';
import { UpdateSalutationDto } from './dto/update-salutation.dto';
import { Model } from 'mongoose';
import { Salutation } from './interfaces/salutation.interface';
// import { Salutation } from './schemas/salutation.schema';

@Injectable()
export class SalutationService {
  constructor(
    @Inject('SALUTATION_MODEL')
    private readonly salutationModel: Model<Salutation>,
  ) {}

  create(createSalutationDto: CreateSalutationDto): Promise<Salutation> {
    const createdSalutation = new this.salutationModel(createSalutationDto);
    return createdSalutation.save();
  }

  findAll(): Promise<Salutation[]> {
    return this.salutationModel.find().exec();
  }

  findOne(id: number) {
    return this.salutationModel.findOne({ _id: id }).exec();
  }

  update(id: number, updateSalutationDto: UpdateSalutationDto) {
    return `This action updates a #${id} salutation`;
  }

  async remove(id: number) {
    const deleted = '';
    // await this.salutationModel
    //   .findByIdAndRemove({ _id: id })
    //   .exec();
    return deleted;
  }
}
