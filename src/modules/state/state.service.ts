import { Inject, Injectable } from '@nestjs/common';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { Model } from 'mongoose';
import { State } from './interfaces/state.interface';

@Injectable()
export class StateService {
  constructor(@Inject('STATE_MODEL') private readonly stateModel: Model<State>) {}

  create(createStateDto: CreateStateDto): Promise<State> {
    const createdState = new this.stateModel(createStateDto);
    return createdState.save();
  }

  findAll(): Promise<State[]> {
    return this.stateModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} state`;
  }

  update(id: number, updateStateDto: UpdateStateDto) {
    return `This action updates a #${id} state`;
  }

  remove(id: number) {
    return `This action removes a #${id} state`;
  }
}
