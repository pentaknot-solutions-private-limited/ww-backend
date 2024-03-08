import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerTypeService } from './customer-type.service';
import { CreateCustomerTypeDto } from './dto/create-customer-type.dto';
import { UpdateCustomerTypeDto } from './dto/update-customer-type.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('customerType')
@Controller('customerType')
export class CustomerTypeController {
  constructor(private readonly customerTypeService: CustomerTypeService) {}

  @Post()
  create(@Body() createCustomerTypeDto: CreateCustomerTypeDto) {
    return this.customerTypeService.create(createCustomerTypeDto);
  }

  @Get()
  findAll() {
    return this.customerTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerTypeDto: UpdateCustomerTypeDto) {
    return this.customerTypeService.update(+id, updateCustomerTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerTypeService.remove(+id);
  }
}
