/*
  Warnings:

  - You are about to drop the column `behaviour` on the `Cat` table. All the data in the column will be lost.
  - Added the required column `size` to the `Cat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cat" DROP COLUMN "behaviour",
ADD COLUMN     "size" TEXT NOT NULL;
