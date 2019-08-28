# Cafe Task API

Create and manage menu items with their recipes and cost.

## instructions to start

 -  git clone git@github.com:TayyabMir056/cafe-task-api.git 
  OR Download zip and extract it to required folder 
 - Use PgAdmin or Pgsql to create database "Afiniti_cafe" 
 - restore database using the file Afiniti_cafe2.backup
 - set database configurations in src/app.module.ts if you changed the database defaults while restoring or if you want to change the port.. the default is 3500
 - open terminal in the directory and run the following command
 

    npm run start:dev
    
    ## EndPoints
An Afiniti.postman_collection.json file has been provided.
In the postman, import the collection it will provide all the 28 endpoints with already entered structures of the data format to use them 
The endoints include:

 - **Price units** (/units)
 Price units are the units in which all the ingredients are measured e.g. kg, liter,units
 the cost of each ingredient will later be inserted *per Price unit*.
 We can add custome price units (e.g 200ml) so that we can set the price of an ingredentient like Rs. 80 per *200ml*
 
 - **Categories** (/categories)
Each menu item can be given a category such as Cakes, Beverages etc

 - **Menu Item** (/menu-item)
  A menu item takes name, selling price, and category.. Its id (uuid) is generated by the db and the cost is automatically calculated when its recipe is created or updated
  example(POST):
```json
      {
            "name": "Chocolate Cake",
            "sellingPrice": 1200,
            "category": {
                "id": "7cc03f94-c2e1-11e9-9c68-308d9976e1ba"
    	        }
    }
```

 - **Inventory  ingredient**(/inventory-ingredient)
 An inventory ingredient takes a name,cost and a price unit in which its cost is measured.
 example(POST):
  ```json
  {
	    "name": "Cocoa",
        "cost": 100,
        "priceUnit": {
            "id":"8548e7fe-c2d9-11e9-97a6-308d9976e1ba"
        }
    }
 ```
  
  
  where pricUnit has to be a Price Unit object with id of the required unit
    

 - **Intermediate ingredient** (/intermediate-ingredient)
An intermediate ingredient takes the name and price unit.. Its cost is automatically calculated when its recipe is added or updated
example (POST):
```json
{
	"name":"Sponge",
	"priceUnit":{ "id": "ec98e738-c39c-11e9-b782-308d9976e1ba"}
}
```

 - **Intermediate Ingredient Recipe** (/intermediate-ingredient-recipe)
And Intermediate ingredient recipe takes the intermediate ingredient whose recipe is being created or updated, and an array of inventory ingredients and their respective quantity

example (POST):
```json
{
	"intermediateIngredient":{"id":"62c1a4ee-c39e-11e9-9691-308d9976e1ba"},
	"recipe":[
		{
			"inventoryIngredient":{"id":"8d19cd62-c32a-11e9-9da8-308d9976e1ba"}	,
			"quantity":1
		},
		{
			"inventoryIngredient":{"id":"14d62b88-c32b-11e9-b2cb-308d9976e1ba"}	,
			"quantity":0.25
		},
		{
			"inventoryIngredient":{"id": "0490f8ac-c32b-11e9-b50f-308d9976e1ba"},
			"quantity":0.5
		}		
		]

} 
```

 - **Menu Item recipe**
 Similar to intermediate ingredient recipe,  a menu item recipe takes the "menu item" whose recipe is being created or updated and an array of inventory/intermediate ingredient with quantity.
 example: 
 ```json
 {
  "menuItem": {"id": "929476c8-c2e1-11e9-be07-308d9976e1ba"},
  "recipe": [
  	{
    "inventoryIngredient": {"id": "8d19cd62-c32a-11e9-9da8-308d9976e1ba"},
    "intermediateIngredient": null,
    "ingredientType": 1,
    "quantity": 1
  },
  {
    "inventoryIngredient":{"id": "14d62b88-c32b-11e9-b2cb-308d9976e1ba"},
    "intermediateIngredient":null,
    "ingredientType": 1,
    "quantity": 2
  },
  {
    "inventoryIngredient": null,
    "intermediateIngredient": {"id": "62c1a4ee-c39e-11e9-9691-308d9976e1ba"},
    "ingredientType": 2,
    "quantity": 1
  }
  ]
}
```
