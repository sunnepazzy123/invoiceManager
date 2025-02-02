import { PrismaClient } from '@prisma/client';
import { nanoid } from 'nanoid';


const prisma = new PrismaClient();

async function main() {
    // Fetch all companies
    const companies = await prisma.company.findMany();

    for (const [index, company] of companies.entries()) {
        let clientCompanyNip: string;

        if (index === companies.length - 1) {
            // Last company contracts with the first company
            clientCompanyNip = companies[0].nip;
        } else {
            // Each company contracts with the next one
            clientCompanyNip = companies[index + 1].nip;
        }

        // Generate a random 6-character alphanumeric ID
        const randomAlphaNumeric = nanoid(6);

        await prisma.contract.create({
            data: {
                type: 'Full',
                wagesPerHour: 25,
                dailyHours: 8,
                duration: 12, // 12 months
                signature: 'Signed Electronically',
                isEnabled: true,
                refNumber: `REF-${randomAlphaNumeric}`, // Generate unique reference
                userId: company.userId,
                companyNip: company.nip,
                clientCompanyNip,
            },
        });
    }

    console.log('Contracts populated successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
