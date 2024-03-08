import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SaleStatusService } from './sale-status.service';
import { CreateSaleStatusDto } from './dto/create-sale-status.dto';
import { UpdateSaleStatusDto } from './dto/update-sale-status.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('saleStatus')
@Controller('saleStatus')
export class SaleStatusController {
  constructor(private readonly saleStatusService: SaleStatusService) {}

  @Post()
  create(@Body() createSaleStatusDto: CreateSaleStatusDto) {
    return this.saleStatusService.create(createSaleStatusDto);
  }

  @Get()
  findAll() {
    return this.saleStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSaleStatusDto: UpdateSaleStatusDto) {
    return this.saleStatusService.update(+id, updateSaleStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleStatusService.remove(+id);
  }
}
