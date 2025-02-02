import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) {}



    findByEmail(email: string): Promise<any> {
        return 
    }

    async findById(id: string) {
        const user = await this.prisma.user.findUnique({where: {id}})
        return user
    }

    async find() {
        const user = await this.prisma.user.findMany()
        return user
    }
}
