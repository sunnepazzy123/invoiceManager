/*
  Warnings:

  - You are about to drop the column `clientNIP` on the `Contract` table. All the data in the column will be lost.
  - Added the required column `clientNip` to the `Contract` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contract" DROP COLUMN "clientNIP",
ADD COLUMN     "clientNip" TEXT NOT NULL;
