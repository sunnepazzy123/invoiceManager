import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { FindOneByIdContractsDto, FindOneByNipContractsDto } from './dto/findContracts.dto';
import { CreateContractsDto } from './dto/createContract.dto';

@Injectable()
export class ContractsService {
    constructor(private readonly prisma: PrismaService) {}

    async find({userId}) {
        const contracts = await this.prisma.contract.findMany({where: {userId} })
        return contracts;
    }

    async findOne(body: FindOneByIdContractsDto) {
        const contract = await this.prisma.contract.findFirst({
            where: body,
            orderBy: { createdAt: 'desc' },  // Order by newest first
        })
        return contract;
    }

    async findOneById(id: string) {
        const contract = await this.prisma.contract.findFirst({
            where: {id: id},
        })
        return contract;
    }


    // async findOneByNip({userId, nip}: FindOneByNipContractsDto) {
    //     const contract = await this.prisma.contract.findFirst({where: {userId, nip} })
    //     return contract;
    // }


    
    // async findOneByRef({userId, refNumber}) {
    //     const contract = await this.prisma.contract.findFirst({where: {userId, refNumber} })
    //     return contract;
    // }

    async create(body: CreateContractsDto) {
        try {
            const contract = await this.prisma.contract.create({data: body})
            return contract;
        } catch (error) {
            console.log(error.message)
            throw new BadRequestException('unable to create contract')
        }
    }
}
