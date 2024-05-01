import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePaymentDto {
  @ApiProperty({
    type: 'string',
    description: 'Sale ID',
    example: '60f1b3b3b3b3b3b3b3b3b3b3',
  })
  @IsString()
  @IsNotEmpty()
  saleId: string;

  @ApiProperty({
    type: 'string',
    description: 'Payment Mode ID',
    example: '60f1b3b3b3b3b3b3b3b3b3b',
  })
  @IsString()
  @IsNotEmpty()
  paymentModeId: string;

  @ApiProperty({
    type: 'number',
    description: 'Payment Number',
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  paymentNo: number;

  @ApiProperty({
    type: 'date',
    description: 'Payment Date',
    example: '2021-07-17T00:00:00.000Z',
  })
  @IsDate()
  @IsNotEmpty()
  paymentDate: Date;

  @ApiProperty({
    type: 'number',
    description: 'Amount Received',
    example: '1000',
  })
  @IsNumber()
  @IsNotEmpty()
  amountReceived: number;
}
