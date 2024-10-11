/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Bike {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ description: 'The unique identifier of the bike' })
  id: string;

  @Column()
  @ApiProperty({ description: 'The make of the bike' })
  make: string;

  @Column()
  @ApiProperty({ description: 'The model of the bike' })
  model: string;

  @Column()
  @ApiProperty({ description: 'The year the bike was manufactured' })
  year: number;

  @Column()
  @ApiProperty({ description: 'The type of the bike' })
  type: string;
}