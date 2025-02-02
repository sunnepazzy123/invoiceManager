/*
  Warnings:

  - You are about to drop the column `clientNip` on the `Contract` table. All the data in the column will be lost.
  - You are about to drop the column `nip` on the `Contract` table. All the data in the column will be lost.
  - Added the required column `clientCompanyId` to the `Contract` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contract" DROP COLUMN "clientNip",
DROP COLUMN "nip",
ADD COLUMN     "clientCompanyId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_clientCompanyId_fkey" FOREIGN KEY ("clientCompanyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "Contract" ADD COLUMN "companyNip" VARCHAR(255);
ALTER TABLE "Contract" ADD COLUMN "clientCompanyNip" VARCHAR(255);
