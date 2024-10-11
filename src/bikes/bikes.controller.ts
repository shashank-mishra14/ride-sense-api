/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { BikesService } from './bikes.service';
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Bike } from './entities/bike.entity';

@ApiTags('bikes')
@Controller('bikes')
export class BikesController {
  constructor(private readonly bikesService: BikesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new bike' })
  @ApiResponse({
    status: 201,
    description: 'The bike has been created',
    type: Bike,
  })
  create(@Body() createBikeDto: CreateBikeDto): Promise<Bike> {
    return this.bikesService.create(createBikeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all bikes' })
  @ApiResponse({ status: 200, description: 'Return all bikes', type: [Bike] })
  findAll(): Promise<Bike[]> {
    return this.bikesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a bike by id' })
  @ApiResponse({ status: 200, description: 'Return the bike', type: Bike })
  @ApiResponse({ status: 404, description: 'Bike not found' })
  findOne(@Param('id') id: string): Promise<Bike> {
    return this.bikesService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a bike' })
  @ApiResponse({
    status: 200,
    description: 'The bike has been updated',
    type: Bike,
  })
  update(
    @Param('id') id: string,
    @Body() updateBikeDto: UpdateBikeDto,
  ): Promise<Bike> {
    return this.bikesService.update(id, updateBikeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a bike' })
  @ApiResponse({ status: 200, description: 'The bike has been deleted' })
  remove(@Param('id') id: string): Promise<void> {
    return this.bikesService.remove(id);
  }
}
