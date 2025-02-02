import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateContractsDto {

  @IsString()
  @IsOptional()
  userId: string;

  @IsString()
  @IsNotEmpty()
  readonly clientCompanyNip: string;

  @IsString()
  @IsNotEmpty()
  readonly type: string;

  @IsNumber()
  @IsNotEmpty()
  readonly wagesPerHour: number;

  @IsNumber()
  @IsNotEmpty()
  readonly dailyHours: number;

  @IsNumber()
  @IsNotEmpty()
  readonly duration: number;

  @IsString()
  @IsNotEmpty()
  readonly signature: string;

  @IsString()
  @IsOptional()
  refNumber: string;

  @IsString()
  @IsNotEmpty()
  companyNip: string;
}
