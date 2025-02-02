import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateCompanyDto } from './dto/createCompany.dto';
import { FindCompanyDto, FindNipCompanyDto } from './dto/findCompany.dto';
import { DeleteCompanyDto, UpdateCompanyDto } from './dto/updateCompany.dto';

@Injectable()
export class CompaniesService {
    constructor(private prisma: PrismaService) {}


    async findAll(query: any) {
       const companies = await this.prisma.company.findMany({where: query});
       return companies
    }

    
    async findOne(body: FindCompanyDto) {
        const company = await this.prisma.company.findFirst({where: body});
        return company
     }

     async findById(id: string) {
        const company = await this.prisma.company.findFirst({where: {id}});
        return company
     }


     async findOneByNip(body: FindNipCompanyDto) {
        const company = await this.prisma.company.findFirst({where: body});
        return company
     }


     async create(body: CreateCompanyDto) {
        try {
            const company = await this.prisma.company.create({
                data: body
            });
            return company
        } catch (error) {
            return new BadRequestException('error updating company')
        }

     }

     async update(body: UpdateCompanyDto) {
        const {id, ...rest} = body
        try {
            const company = await this.prisma.company.update({
                where: {id: body.id},
                data: rest
            });
            return company
        } catch (error) {
            return new BadRequestException('error updating company')
        }

     }


     
     async delete(body: DeleteCompanyDto) {
        try {
            const company = await this.prisma.company.update({
                where: body,
                data: {isEnabled: false}
            });
            return company
        } catch (error) {
            return new BadRequestException('error deleting company')
        }

     }
}
