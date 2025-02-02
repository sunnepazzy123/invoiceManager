/*
  Warnings:

  - Added the required column `userId` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `duration` on the `Contract` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Contract" ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "clientNIP" SET DATA TYPE TEXT,
DROP COLUMN "duration",
ADD COLUMN     "duration" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
