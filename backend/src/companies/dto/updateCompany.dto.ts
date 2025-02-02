import {
  IsBoolean,
    IsNotEmpty,
    IsOptional,
    IsString,
  } from 'class-validator';
  
  export class UpdateCompanyDto {
    @IsString()
    @IsOptional()
    readonly id: string;
  
    @IsString()
    @IsOptional()
    readonly name: string;

    @IsString()
    @IsOptional()
    readonly email: string;

    @IsString()
    @IsOptional()
    readonly phone: string;

    @IsString()
    @IsOptional()
    readonly address: string;

    @IsString()
    @IsOptional()
    readonly userId: string;

    @IsBoolean()
    @IsOptional()
    readonly ownership: boolean;
  }

  export class DeleteCompanyDto {
    @IsString()
    @IsNotEmpty()
    readonly id: string;

    @IsString()
    @IsNotEmpty()
    readonly userId: string;
  }
  