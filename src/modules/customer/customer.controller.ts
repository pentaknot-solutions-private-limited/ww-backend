import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ApiTags } from '@nestjs/swagger';
import { CustomerTypeService } from '../customer-type/customer-type.service';
import { SalutationService } from '../salutation/salutation.service';
import { StateService } from '../state/state.service';

@ApiTags('customer')
@Controller('customer')
export class CustomerController {
  constructor(
    private readonly customerService: CustomerService,
    private readonly customerTypeService: CustomerTypeService,
    private readonly salutationService: SalutationService,
    private readonly stateService: StateService,
  ) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get('dependencies')
  async findDependencies() {
    return {
      customerTypes: await this.customerTypeService.findAll(),
      salutations: await this.salutationService.findAll(),
      states: await this.stateService.findAll(),
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customerService.update(
      // +
      id, 
      updateCustomerDto
      );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return this.customerService.delete(+id);
    return this.customerService.updateIsActive(id, false);
  }
}
