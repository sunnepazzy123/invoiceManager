import { Body, Controller, Get, InternalServerErrorException, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { ReqUser } from 'src/decorators';
import { BankAccountService } from './bankAccount.service';
import { CreateBankAccountDto, QueryBankAccountDto } from './dto/index.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Bank Account')
@Controller('bank_account')
export class BankAccountController {
    constructor(private bankAccountService: BankAccountService) {}


    @Get()
    async getAccounts(@ReqUser() userId: string) {
      const accounts = await this.bankAccountService.findAll({userId})
      return accounts
    }

    @Get(':id')
    async getAccount(
      @ReqUser() userId, 
      @Param('id') id: string, 
      @Query() query: QueryBankAccountDto 
    ) {
      try {
        query.id = id;
        query.userId = userId;
    
        const account = await this.bankAccountService.findOne(query);
        
        if (!account) {
          throw new NotFoundException('Bank account not found');
        }
    
        return account;
      } catch (error) {
        throw new InternalServerErrorException('Error retrieving bank account');
      }
    }
    

    @Post()
    async create(@ReqUser() userId: string, @Body() body: CreateBankAccountDto) {
      body.userId = userId
      return await this.bankAccountService.create(body);
     
    }

    @Put(':id')
    async update(@ReqUser() userId: string, @Body() body: any, @Param('id') id: string) {
      const company = await this.bankAccountService.findOne({userId, id});
      if(!company) {
        throw new NotFoundException('company does not exist')
      }
      const updatedCompany = await this.bankAccountService.update({id, ...body});
      return updatedCompany;
    }
  
}
