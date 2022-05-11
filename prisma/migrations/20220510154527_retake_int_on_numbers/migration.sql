/*
  Warnings:

  - You are about to alter the column `ingredients_number` on the `recipe` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `minutes` on the `recipe` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `people` on the `recipe` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropIndex
DROP INDEX `Steps_recipe_id_fkey` ON `steps`;

-- AlterTable
ALTER TABLE `recipe` MODIFY `ingredients_number` INTEGER NOT NULL,
    MODIFY `minutes` INTEGER NOT NULL,
    MODIFY `people` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Steps` ADD CONSTRAINT `Steps_recipe_id_fkey` FOREIGN KEY (`recipe_id`) REFERENCES `Recipe`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
