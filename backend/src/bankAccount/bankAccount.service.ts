import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateBankAccountDto, QueryBankAccountDto, UpdateBankAccountDto } from './dto/index.dto';

@Injectable()
export class BankAccountService {
    constructor(private prisma: PrismaService) {}


    async findAll(query: any) {
       const bankAccounts = await this.prisma.bankAccount.findMany({where: query});
       return bankAccounts
    }

    
    async findOne(body: QueryBankAccountDto) {
        const bankAccount = await this.prisma.bankAccount.findFirst({where: body});
        return bankAccount
     }

     async findById(id: string) {
        const company = await this.prisma.company.findFirst({where: {id}});
        return company
     }

     async create(body: CreateBankAccountDto) {
        const { companyId, userId } = body
        // Find the bank account
        const bankAccount = await this.findOne({ companyId, userId });
        if(bankAccount) {
          throw new BadRequestException('bank account already exist for this company')
        }
        try {
            const newAccount = await this.prisma.bankAccount.create({
                data: body
            });
            return newAccount
        } catch (error) {
            return new BadRequestException('error creating bank account')
        }

     }

     async update(body: UpdateBankAccountDto) {
        const { id, companyId, userId, ...updateData } = body;
    
        // Validate required fields
        if (!id || !companyId || !userId) {
            throw new BadRequestException('Invalid request: Missing required identifiers');
        }
    
        // Find the bank account
        const bankAccount = await this.findOne({ id, companyId, userId });
        if (!bankAccount) {
            throw new BadRequestException('Bank account does not exist');
        }
    
        try {
            // Update the bank account
            return await this.prisma.company.update({
                where: { id },
                data: updateData,
            });
        } catch (error) {
            throw new BadRequestException('Error updating bank account');
        }
    }
}
