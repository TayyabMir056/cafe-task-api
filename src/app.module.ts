import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuItemCategoryModule } from './menu-item-category/menu-item-category.module';
import { MenuItemCategoryService } from './menu-item-category/menu-item-category.service';
import { PriceUnitModule } from './price-unit/price-unit.module';
import { MenuItemModule } from './menu-item/menu-item.module';
import { InventoryIngredientModule } from './inventory-ingredient/inventory-ingredient.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'Afiniti_cafe',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      logging: true,
    }),
    MenuItemCategoryModule,
    PriceUnitModule,
    MenuItemModule,
    InventoryIngredientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
