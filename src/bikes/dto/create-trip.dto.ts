import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTripDto {

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'etweteqw' })
    user: string;


    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'The make of the bike' })
    bikeId: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'The model of the bike' })
    destination: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'The model of the bike' })
    weather: string;
}