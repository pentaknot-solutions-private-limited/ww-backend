import { PartialType } from '@nestjs/mapped-types';
import { CreateSalutationDto } from './create-salutation.dto';

export class UpdateSalutationDto extends PartialType(CreateSalutationDto) {}
