"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const menu_item_category_module_1 = require("./menu-item-category/menu-item-category.module");
const price_unit_module_1 = require("./price-unit/price-unit.module");
const menu_item_module_1 = require("./menu-item/menu-item.module");
const inventory_ingredient_module_1 = require("./inventory-ingredient/inventory-ingredient.module");
const intermediate_ingredient_module_1 = require("./intermediate-ingredient/intermediate-ingredient.module");
const intermediate_ingredient_recipe_module_1 = require("./intermediate-ingredient-recipe/intermediate-ingredient-recipe.module");
const menu_item_recipe_module_1 = require("./menu-item-recipe/menu-item-recipe.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
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
            menu_item_category_module_1.MenuItemCategoryModule,
            price_unit_module_1.PriceUnitModule,
            menu_item_module_1.MenuItemModule,
            inventory_ingredient_module_1.InventoryIngredientModule,
            intermediate_ingredient_module_1.IntermediateIngredientModule,
            intermediate_ingredient_recipe_module_1.IntermediateIngredientRecipeModule,
            menu_item_recipe_module_1.MenuItemRecipeModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map