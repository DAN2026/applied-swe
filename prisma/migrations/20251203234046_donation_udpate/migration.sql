-- CreateEnum
CREATE TYPE "Times" AS ENUM ('Morning', 'Afternoon', 'Evening');

-- CreateEnum
CREATE TYPE "DonationStatus" AS ENUM ('Pending', 'Approved', 'Collected', 'Distributed');

-- CreateEnum
CREATE TYPE "Size" AS ENUM ('XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL');

-- CreateEnum
CREATE TYPE "Condition" AS ENUM ('New', 'LikeNew', 'Worn', 'HeavilyWorn');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'STAFF', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "User_ID" SERIAL NOT NULL,
    "Username" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Phone" TEXT,
    "Password" TEXT NOT NULL,
    "Address" TEXT NOT NULL,
    "Postcode" TEXT NOT NULL,
    "Role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("User_ID")
);

-- CreateTable
CREATE TABLE "Staff" (
    "Staff_ID" SERIAL NOT NULL,
    "User_ID" INTEGER NOT NULL,
    "Charity_ID" INTEGER NOT NULL,

    CONSTRAINT "Staff_pkey" PRIMARY KEY ("Staff_ID")
);

-- CreateTable
CREATE TABLE "Admin" (
    "Admin_ID" SERIAL NOT NULL,
    "User_ID" INTEGER NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("Admin_ID")
);

-- CreateTable
CREATE TABLE "Items" (
    "Item_No" SERIAL NOT NULL,
    "Item_Name" TEXT NOT NULL,
    "Brand" TEXT NOT NULL,
    "Size" "Size" NOT NULL,
    "Colour" TEXT NOT NULL,
    "Condition" "Condition" NOT NULL,
    "Image" TEXT NOT NULL,
    "Time" "Times" NOT NULL,
    "Pickup_Date" TIMESTAMP(3) NOT NULL,
    "Status" "DonationStatus" NOT NULL DEFAULT 'Pending',
    "Donor_ID" INTEGER NOT NULL,
    "Charity_ID" INTEGER NOT NULL,
    "Date_Added" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Items_pkey" PRIMARY KEY ("Item_No")
);

-- CreateTable
CREATE TABLE "Charity" (
    "Charity_ID" SERIAL NOT NULL,
    "Charity_Name" TEXT NOT NULL,
    "About" TEXT NOT NULL,
    "Logo" TEXT NOT NULL,

    CONSTRAINT "Charity_pkey" PRIMARY KEY ("Charity_ID")
);

-- CreateTable
CREATE TABLE "Fumes" (
    "Entry_No" SERIAL NOT NULL,
    "CO2_Saved" INTEGER NOT NULL,
    "Date_Logged" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Fumes_pkey" PRIMARY KEY ("Entry_No")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Username_key" ON "User"("Username");

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "User_Phone_key" ON "User"("Phone");

-- CreateIndex
CREATE UNIQUE INDEX "Charity_Charity_Name_key" ON "Charity"("Charity_Name");

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_User_ID_fkey" FOREIGN KEY ("User_ID") REFERENCES "User"("User_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_Charity_ID_fkey" FOREIGN KEY ("Charity_ID") REFERENCES "Charity"("Charity_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_User_ID_fkey" FOREIGN KEY ("User_ID") REFERENCES "User"("User_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Items" ADD CONSTRAINT "Items_Donor_ID_fkey" FOREIGN KEY ("Donor_ID") REFERENCES "User"("User_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Items" ADD CONSTRAINT "Items_Charity_ID_fkey" FOREIGN KEY ("Charity_ID") REFERENCES "Charity"("Charity_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
