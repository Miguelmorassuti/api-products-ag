import { IsNotEmpty, IsPositive, IsString, MaxLength } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;

  @IsNotEmpty()
  @IsPositive()
  price: number;

  @IsString()
  description?: string;
}
