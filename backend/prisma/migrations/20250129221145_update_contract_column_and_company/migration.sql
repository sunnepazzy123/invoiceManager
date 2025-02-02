/*
  Warnings:

  - You are about to drop the column `clientCompanyId` on the `Contract` table. All the data in the column will be lost.
  - You are about to drop the column `companyId` on the `Contract` table. All the data in the column will be lost.
  - Made the column `companyNip` on table `Contract` required. This step will fail if there are existing NULL values in that column.
  - Made the column `clientCompanyNip` on table `Contract` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Contract" DROP CONSTRAINT "Contract_clientCompanyId_fkey";

-- DropForeignKey
ALTER TABLE "Contract" DROP CONSTRAINT "Contract_companyId_fkey";

-- AlterTable
ALTER TABLE "Contract" DROP COLUMN "clientCompanyId",
DROP COLUMN "companyId",
ALTER COLUMN "companyNip" SET NOT NULL,
ALTER COLUMN "companyNip" SET DATA TYPE TEXT,
ALTER COLUMN "clientCompanyNip" SET NOT NULL,
ALTER COLUMN "clientCompanyNip" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_companyNip_fkey" FOREIGN KEY ("companyNip") REFERENCES "Company"("nip") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_clientCompanyNip_fkey" FOREIGN KEY ("clientCompanyNip") REFERENCES "Company"("nip") ON DELETE RESTRICT ON UPDATE CASCADE;
