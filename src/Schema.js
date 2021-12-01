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
        "allDay",
        "mainCourse",
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
  primaryKey: "orderNumber",
  version: 0,
  type: "object",
  properties: {
    orderNumber: {
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
    orderItems: {
      type: "array",
      uniqueItems: true,
      items: {
        type: "object",
        properties: {
          mealIdentifier: {
            ref: "meals",
            type: "string",
          },
          quantity: {
            type: "integer",
          },
        },
      },
    },
  },
  required: ["orderStatus"],
};
