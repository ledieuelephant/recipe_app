-- DropIndex
DROP INDEX `Steps_recipe_id_fkey` ON `steps`;

-- AlterTable
ALTER TABLE `recipe` MODIFY `ingredients_number` VARCHAR(191) NOT NULL,
    MODIFY `minutes` VARCHAR(191) NOT NULL,
    MODIFY `people` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Steps` ADD CONSTRAINT `Steps_recipe_id_fkey` FOREIGN KEY (`recipe_id`) REFERENCES `Recipe`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
