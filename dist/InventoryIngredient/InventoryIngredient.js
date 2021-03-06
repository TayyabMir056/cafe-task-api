'use strict';
var __decorate =
  (this && this.__decorate) ||
  function(decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function(k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, '__esModule', { value: true });
const typeorm_1 = require('typeorm');
const PriceUnit_1 = require('../PriceUnit/PriceUnit');
const IntermediateIngredientRecipe_1 = require('../IntermediateIngredientRecipe/IntermediateIngredientRecipe');
const MenuItemRecipe_1 = require('../MenuItemRecipe/MenuItemRecipe');
let InventoryIngredient = class InventoryIngredient {};
__decorate(
  [
    typeorm_1.Column('uuid', {
      nullable: false,
      primary: true,
      name: 'id',
    }),
    __metadata('design:type', String),
  ],
  InventoryIngredient.prototype,
  'id',
  void 0,
);
__decorate(
  [
    typeorm_1.Column('character varying', {
      nullable: false,
      unique: true,
      name: 'name',
    }),
    __metadata('design:type', String),
  ],
  InventoryIngredient.prototype,
  'name',
  void 0,
);
__decorate(
  [
    typeorm_1.Column('decimal', {
      nullable: false,

      name: 'cost',
    }),
    __metadata('design:type', Number),
  ],
  InventoryIngredient.prototype,
  'cost',
  void 0,
);
__decorate(
  [
    typeorm_1.ManyToOne(
      type => PriceUnit_1.PriceUnit,
      priceUnit => priceUnit.inventoryIngredients,
      {
        nullable: false,
      },
    ),
    typeorm_1.JoinColumn({ name: 'priceUnit' }),
    __metadata('design:type', PriceUnit_1.PriceUnit),
  ],
  InventoryIngredient.prototype,
  'priceUnit',
  void 0,
);
__decorate(
  [
    typeorm_1.OneToMany(
      type => IntermediateIngredientRecipe_1.IntermediateIngredientRecipe,
      intermediateIngredientRecipe =>
        intermediateIngredientRecipe.inventoryIngredient,
    ),
    __metadata('design:type', Array),
  ],
  InventoryIngredient.prototype,
  'intermediateIngredientRecipes',
  void 0,
);
__decorate(
  [
    typeorm_1.OneToMany(
      type => MenuItemRecipe_1.MenuItemRecipe,
      menuItemRecipe => menuItemRecipe.inventoryIngredient,
    ),
    __metadata('design:type', Array),
  ],
  InventoryIngredient.prototype,
  'menuItemRecipes',
  void 0,
);
InventoryIngredient = __decorate(
  [
    typeorm_1.Entity('InventoryIngredient', { schema: 'public' }),
    typeorm_1.Index('unique_ingredient_name', ['name'], { unique: true }),
  ],
  InventoryIngredient,
);
exports.InventoryIngredient = InventoryIngredient;
//# sourceMappingURL=InventoryIngredient.js.map
