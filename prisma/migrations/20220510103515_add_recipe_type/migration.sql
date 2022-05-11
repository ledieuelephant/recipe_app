/*
  Warnings:

  - Added the required column `type` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Steps_recipe_id_fkey` ON `steps`;

-- AlterTable
ALTER TABLE `recipe` ADD COLUMN `type` VARCHAR(250) NOT NULL;

-- AddForeignKey
ALTER TABLE `Steps` ADD CONSTRAINT `Steps_recipe_id_fkey` FOREIGN KEY (`recipe_id`) REFERENCES `Recipe`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
