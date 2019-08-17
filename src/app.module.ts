import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuItemCategoryModule } from './menu-item-category/menu-item-category.module';
import { MenuItemCategoryService } from './menu-item-category/menu-item-category.service';
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
