import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class FindContractsDto {
  @IsString()
  @IsNotEmpty()
  readonly id: string;

  @IsString()
  @IsNotEmpty()
  readonly userId: string;
}

export class FindOneByIdContractsDto {
  @IsString()
  @IsNotEmpty()
  readonly userId?: string;

  @IsString()
  @IsNotEmpty()
  readonly clientCompanyId?: string;

  @IsString()
  @IsNotEmpty()
  readonly companyId?: string;

  @IsString()
  @IsOptional()
  readonly id?: string;
}

export class FindOneByNipContractsDto {
  @IsString()
  @IsNotEmpty()
  readonly userId: string;

  @IsString()
  @IsNotEmpty()
  readonly nip: string;
}

export class FindOneByRefContractsDto {
  @IsString()
  @IsNotEmpty()
  readonly refNumber: string;

  @IsString()
  @IsNotEmpty()
  readonly userId: string;

}
