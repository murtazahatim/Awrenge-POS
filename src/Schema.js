export const mealInventorySchema = {
  title: "Available Meal Inventory Schema",
  description: "Database schema for meals available in the inventory",
  primaryKey: "id",
  version: 0,
  type: "object",
  properties: {
    id: {
      type: "string",
    },
    name: {
      type: "string",
    },
    price: {
      type: "number",
    },
    inventory: {
      type: "number",
    },
    image: {
      type: "string",
    },
    mealType: {
      type: "string",
      enum: [
        "hot",
        "cold",
        "breakfast",
        "soup",
        "grill",
        "appetizer",
        "dessert",
        "drinks",
      ],
    },
  },
  required: ["name", "price", "inventory", "image"],
};

export const orderInventorySchema = {
  title: "Available Order Inventory Schema",
  description: "Database schema for orders",
  primaryKey: "id",
  version: 0,
  type: "object",
  properties: {
    id: {
      type: "string",
    },
    orderDate: {
      type: "string",
      format: "date-time",
      final: true,
    },
    orderStatus: {
      type: "string",
      enum: ["pending", "preparing", "complete"],
    },
  },
};
