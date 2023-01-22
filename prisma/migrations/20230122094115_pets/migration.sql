-- CreateTable
CREATE TABLE "Dog" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "hairType" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "size" TEXT NOT NULL,

    CONSTRAINT "Dog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cat" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "hairType" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "size" TEXT NOT NULL,

    CONSTRAINT "Cat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dog_id_key" ON "Dog"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Cat_id_key" ON "Cat"("id");
