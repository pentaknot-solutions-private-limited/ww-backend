import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SaleService } from './sale.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { ApiTags } from '@nestjs/swagger';
import { CustomerService } from '../customer/customer.service';

@ApiTags('sale')
@Controller('sale')
export class SaleController {
  constructor(
    private readonly saleService: SaleService,
    private customerService: CustomerService,
  ) {}

  @Post()
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.saleService.create(createSaleDto);
  }

  @Get()
  findAll() {
    return this.saleService.findAll();
  }

  @Get('dependencies')
  async findDependencies() {
    return {
      customers: await this.customerService.findAll(),
      inventory: await [],
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSaleDto: UpdateSaleDto) {
    return this.saleService.update(
      // +
      id,
      updateSaleDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return this.saleService.delete(+id);
    return this.saleService.updateIsActive(id, false);
  }
}
