/*
  Warnings:

  - You are about to drop the column `size` on the `Cat` table. All the data in the column will be lost.
  - Added the required column `behaviour` to the `Cat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cat" DROP COLUMN "size",
ADD COLUMN     "behaviour" TEXT NOT NULL;
