/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBikeDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'The make of the bike', example: 'Royal Enfield' })
  make: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'The model of the bike', example: 'Classic 350' })
  model: string;

  @IsNumber()
  @Min(1900)
  @Max(2100)
  @ApiProperty({ description: 'The year the bike was manufactured', example: 2021 })
  year: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'The type of the bike', example: 'Cruiser' })
  type: string;
}