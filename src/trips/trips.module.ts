/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripsController } from './trips.controller';
import { TripsService } from './trips.service';
import { Trip } from 'src/bikes/entities/trip.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Trip])],
  controllers: [TripsController],
  providers: [TripsService],
})
export class TripsModule {}