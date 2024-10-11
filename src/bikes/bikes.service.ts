/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bike } from './entities/bike.entity';
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';

@Injectable()
export class BikesService {
  constructor(
    @InjectRepository(Bike)
    private bikesRepository: Repository<Bike>,
  ) {}

  create(createBikeDto: CreateBikeDto): Promise<Bike> {
    const bike = this.bikesRepository.create(createBikeDto);
    return this.bikesRepository.save(bike);
  }

  findAll(): Promise<Bike[]> {
    return this.bikesRepository.find();
  }

  async findOne(id: string): Promise<Bike> {
    const bike = await this.bikesRepository.findOne({ where: { id } });
    if (!bike) {
      throw new NotFoundException(`Bike with ID ${id} not found`);
    }
    return bike;
  }

  async update(id: string, updateBikeDto: UpdateBikeDto): Promise<Bike> {
    const bike = await this.findOne(id);
    Object.assign(bike, updateBikeDto);
    return this.bikesRepository.save(bike);
  }

  async remove(id: string): Promise<void> {
    const result = await this.bikesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Bike with ID ${id} not found`);
    }
  }
}