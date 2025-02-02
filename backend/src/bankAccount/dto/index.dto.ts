import { IsString, IsInt, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';


export class CreateBankAccountDto {
  @IsString()
  name: string;

  @IsString()
  accountName: string;

  @IsInt()
  accountNumber: number;

  @IsString()
  companyId: string;

  @IsOptional()
  userId: string;
}

export class UpdateBankAccountDto extends PartialType(CreateBankAccountDto) {
  @IsOptional()
  id?: string;
}

export class QueryBankAccountDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  accountName?: string;

  @IsOptional()
  @IsInt()
  accountNumber?: number;

  @IsOptional()
  @IsString()
  companyId?: string;

  @IsOptional()
  @IsString()
  userId?: string;
}