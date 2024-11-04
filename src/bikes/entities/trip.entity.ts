/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Trip {

    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({ description:'The unique identifier of the trip'})
    id: string;

    @Column()
    @ApiProperty({ description: 'The unique identifier of the bike' })
    user: string;

    @Column()
    @ApiProperty({ description: 'The make of the bike' })
    bikeId: string;

    @Column()
    @ApiProperty({ description: 'The model of the bike' })
    destination: string;

    @Column()
    @ApiProperty({ description: 'The model of the bike' })
    weather: string;

}