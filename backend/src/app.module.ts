import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompaniesModule } from './companies/companies.module';
import { UsersModule } from './users/users.module';
import { PrismaService } from './services/prisma.service';
import { InvoicesModule } from './invoices/invoices.module';
import { ContractsModule } from './contracts/contracts.module';
import { JwtMiddleware } from './middlewares/jwt.middleware';
import { AuthModule } from './auth/auth.module';
import { publicPaths } from './constants';
import { JwtService } from '@nestjs/jwt';
import { BankAccountModule } from './bankAccount/bankAccount.module';

@Module({
  imports: [AuthModule, CompaniesModule, UsersModule, InvoicesModule, ContractsModule, BankAccountModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, JwtService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleware)
    .exclude(...publicPaths)
    .forRoutes('*'); // Apply for all routes
  }
}