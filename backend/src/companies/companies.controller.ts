import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/createCompany.dto';
import { UpdateCompanyDto } from './dto/updateCompany.dto';
import { ReqUser } from 'src/decorators';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Companies')
@Controller('companies')
export class CompaniesController {
    constructor(private companiesService: CompaniesService) {}


    @Get()
    async getCompanies(@ReqUser() userId: string, @Query('ownership') ownership?: string) {
      const companies = await this.companiesService.findAll({userId})
      return companies
    }

    @Get(':id')
    async getCompany(@ReqUser() userId, @Param('id') id: string) {
      const company = await this.companiesService.findOne({id, userId})
      return company
    }

    @Post('create')
    async create(@ReqUser() userId: string, @Body() body: CreateCompanyDto) {
      let company = await this.companiesService.findOneByNip({userId, nip: body.nip});
      if(company) {
        throw new BadRequestException('company nip already exist')
      }
      body.userId = userId
      return await this.companiesService.create(body);
     
    }

    @Put(':id')
    async update(@ReqUser() userId: string, @Body() body: UpdateCompanyDto, @Param('id') id: string) {
      const company = await this.companiesService.findOne({userId, id});
      if(!company) {
        throw new NotFoundException('company does not exist')
      }
      const updatedCompany = await this.companiesService.update({id, ...body});
      return updatedCompany;
    }
  
    @Delete(':id')
    async delete(@ReqUser() userId: string, @Param('id') id: string) {
      const company = await this.companiesService.findOne({userId, id});
      if(!company) {
        throw new NotFoundException('company does not exist')
      }
      const updatedCompany = await this.companiesService.delete({userId, id});
      return updatedCompany;
    }
}
