import { Module } from '@nestjs/common';
import { ContractsService } from './contracts.service';
import { ContractsController } from './contracts.controller';
import { PrismaService } from 'src/services/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { CompaniesService } from 'src/companies/companies.service';

@Module({
  providers: [ContractsService, PrismaService, JwtService, CompaniesService],
  controllers: [ContractsController]
})
export class ContractsModule {}
