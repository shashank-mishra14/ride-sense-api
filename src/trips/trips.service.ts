/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
// import { Bike } from './entities/bike.entity';
// import { CreateBikeDto } from './dto/create-bike.dto';
// import { UpdateBikeDto } from './dto/update-bike.dto';
import { Trip } from 'src/bikes/entities/trip.entity';
import { CreateTripDto } from 'src/bikes/dto/create-trip.dto';

@Injectable()
export class TripsService {
  constructor(
    @InjectRepository(Trip)
    private tripsRepository: Repository<Trip>,
  ) {}

  create(createTripDto: CreateTripDto): Promise<Trip> {
    const trip = this.tripsRepository.create(createTripDto);
    return this.tripsRepository.save(trip);
  }

  async getCoordinates(destination:string){

    try{
        const response = await firstValueFrom( this.httpService.get(`https://nominatim.openstreetmap.org/search.php`))
    }
  }


//   findAll(): Promise<Bike[]> {
//     return this.bikesRepository.find();
//   }

//   async findOne(id: string): Promise<Bike> {
//     const bike = await this.bikesRepository.findOne({ where: { id } });
//     if (!bike) {
//       throw new NotFoundException(`Bike with ID ${id} not found`);
//     }
//     return bike;
//   }

//   async update(id: string, updateBikeDto: UpdateBikeDto): Promise<Bike> {
//     const bike = await this.findOne(id);
//     Object.assign(bike, updateBikeDto);
//     return this.bikesRepository.save(bike);
//   }

//   async remove(id: string): Promise<void> {
//     const result = await this.bikesRepository.delete(id);
//     if (result.affected === 0) {
//       throw new NotFoundException(`Bike with ID ${id} not found`);
//     }
//   }
}
