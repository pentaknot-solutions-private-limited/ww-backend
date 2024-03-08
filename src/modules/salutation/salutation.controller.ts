import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalutationService } from './salutation.service';
import { CreateSalutationDto } from './dto/create-salutation.dto';
import { UpdateSalutationDto } from './dto/update-salutation.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('salutation')
@Controller('salutation')
export class SalutationController {
  constructor(private readonly salutationService: SalutationService) {}

  @Post()
  create(@Body() createSalutationDto: CreateSalutationDto) {
    return this.salutationService.create(createSalutationDto);
  }

  @Get()
  findAll() {
    return this.salutationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salutationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalutationDto: UpdateSalutationDto) {
    return this.salutationService.update(+id, updateSalutationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salutationService.remove(+id);
  }
}
