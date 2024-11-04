import { Controller } from "@nestjs/common";
import { TripsService } from "./trips.service";
import { CreateTripDto } from "src/bikes/dto/create-trip.dto";
import {Post, Body} from "@nestjs/common";
import { Trip } from "src/bikes/entities/trip.entity";


@Controller('trips')
export class TripsController{
    constructor(private readonly tripsService: TripsService) {}

    @Post()
    create(@Body() createTripDto: CreateTripDto):Promise<Trip>{
        return this.tripsService.create(createTripDto)
    }
}