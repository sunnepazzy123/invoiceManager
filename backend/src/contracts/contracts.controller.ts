import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { ContractsService } from './contracts.service';
import { ReqUser } from 'src/decorators';
import { CreateContractsDto } from './dto/createContract.dto';
import { nanoid } from 'nanoid';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Contracts')
@Controller('contracts')
export class ContractsController {
  constructor(
    private contractsService: ContractsService,
  ) {}


  @Get()
  async get(@ReqUser() userId: string) {
    const contracts = await this.contractsService.find({ userId });
    return contracts;
  }


  @Get(':id')
  async getOne(@ReqUser() userId: string, @Param('id') id: string) {
    const contract = await this.contractsService.findOneById(id);
    return contract;
  }


  @Post()
  async create(@ReqUser() userId: string, @Body() body: CreateContractsDto) {

    const query = {
      clientCompanyNip: body.clientCompanyNip,
      companyNip: body.companyNip,
      userId
    }
    const contract = await this.contractsService.findOne(query);

    if(contract && contract.isEnabled) {
      throw new BadRequestException("Company Agreement is still on going ")
    }

    body.userId = userId
    body.refNumber = `REF-${nanoid(6)}`

    const agreement = await this.contractsService.create(body)
    return agreement

  }
}
