/*
  Warnings:

  - A unique constraint covering the columns `[refNumber]` on the table `Contract` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `refNumber` to the `Contract` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contract" ADD COLUMN     "refNumber" TEXT NOT NULL,
ALTER COLUMN "isEnabled" SET DEFAULT true;

-- CreateIndex
CREATE UNIQUE INDEX "Contract_refNumber_key" ON "Contract"("refNumber");
