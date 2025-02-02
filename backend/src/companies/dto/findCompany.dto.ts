import {
    IsNotEmpty,
    IsString,
  } from 'class-validator';
  
  export class FindCompanyDto {
    @IsString()
    @IsNotEmpty()
    readonly id: string;
  

    @IsString()
    @IsNotEmpty()
    readonly userId: string;
  }
  

  export class FindNipCompanyDto {
    @IsString()
    @IsNotEmpty()
    readonly nip: string;
  

    @IsString()
    @IsNotEmpty()
    readonly userId: string;
  }
  

  