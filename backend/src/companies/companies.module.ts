import { Module } from '@nestjs/common';
import { CompaniesController } from './companies.controller';
import { CompaniesService } from './companies.service';
import { PrismaService } from 'src/services/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [CompaniesController],
  providers: [CompaniesService, PrismaService, JwtService]
})
export class CompaniesModule {}
