import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { BankAccountController } from './bankAccount.controller';
import { BankAccountService } from './bankAccount.service';

@Module({
  controllers: [BankAccountController],
  providers: [BankAccountService, PrismaService, JwtService]
})
export class BankAccountModule {}
