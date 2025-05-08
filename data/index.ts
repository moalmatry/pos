export interface IMenu {
  id: string | number;
  name: string;
  description?: string;
  price: number;
  image: string;
  category?: string;
}

export interface ICasher {
  id: string | number;
  qty: number;
  name: string;
  price: number;
  image: string;
}

export interface IOrder {
  id: number;
  status: "Paid" | "Unpaid";
  totalPrice: number;
}

export const menu: IMenu[] = [
  {
    id: 1,
    name: "Grill Sandwich",
    description: "Beetroot, Potato, Bell Pepper, Sandwich Masala.",
    price: 20,
    image:
      "https://www.midwestliving.com/thmb/qsmMak4sE4cJsekPLhTRBahPuYg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1554x0:1556x2)/101497359-2_smokin-grand-slam-sandwich.pg-b3c15f5251344e08b2530ff8c230b704.jpg",
  },
  {
    id: 2,
    name: "Veggie Burger",
    description: "Lettuce, Tomato, Onion, Veg Patty, Special Sauce.",
    price: 25,
    image: "https://foodish-api.com/images/biryani/biryani57.jpg",
  },
  {
    id: 3,
    name: "Cheese Pizza",
    description: "Mozzarella, Basil, Tomato Sauce, Crispy Crust.",
    price: 30,
    image: "https://foodish-api.com/images/rice/rice1.jpg",
  },
  {
    id: 4,
    name: "Pasta Alfredo",
    description: "Creamy Alfredo Sauce, Parmesan, Fresh Herbs.",
    price: 35,
    image: "https://foodish-api.com/images/biryani/biryani54.jpg",
  },
  {
    id: 5,
    name: "Club Sandwich",
    description: "Grilled Chicken, Lettuce, Tomato, Mayo.",
    price: 22,
    image: "https://foodish-api.com/images/rice/rice7.jpg",
  },
  {
    id: 6,
    name: "Mango Smoothie",
    description: "Fresh Mango, Yogurt, Honey, Ice.",
    price: 18,
    image: "https://foodish-api.com/images/butter-chicken/butter-chicken3.jpg",
  },
  {
    id: 7,
    name: "French Fries",
    description: "Crispy Golden Fries with Seasoning.",
    price: 15,
    image: "https://foodish-api.com/images/biryani/biryani51.jpg",
  },
  {
    id: 8,
    name: "Caesar Salad",
    description: "Romaine Lettuce, Croutons, Parmesan, Caesar Dressing.",
    price: 28,
    image: "https://foodish-api.com/images/samosa/samosa6.jpg",
  },
  {
    id: 9,
    name: "Chocolate Brownie",
    description: "Rich Dark Chocolate, Walnuts, Fudgy Texture.",
    price: 20,
    image: "https://example.com/chocolate-brownie.jpg",
  },
  {
    id: 10,
    name: "Berry Pancakes",
    description: "Blueberries, Maple Syrup, Fluffy Pancakes.",
    price: 27,
    image: "https://foodish-api.com/images/samosa/samosa20.jpg",
  },
  {
    id: 11,
    name: "Spicy Tacos",
    description: "Grilled Chicken, Jalapeños, Cilantro, Salsa.",
    price: 26,
    image: "https://foodish-api.com/images/dosa/dosa59.jpg",
  },
  {
    id: 12,
    name: "Tomato Soup",
    description: "Fresh Tomato, Basil, Cream, Crunchy Croutons.",
    price: 23,
    image: "https://foodish-api.com/images/pasta/pasta23.jpg",
  },
  {
    id: 13,
    name: "BBQ Chicken Wings",
    description: "Smoked BBQ Sauce, Tender Chicken, Spices.",
    price: 32,
    image: "https://foodish-api.com/images/pasta/pasta17.jpg",
  },
  {
    id: 14,
    name: "Garlic Bread",
    description: "Toasted Bread, Garlic Butter, Herbs.",
    price: 12,
    image: "https://foodish-api.com/images/pasta/pasta29.jpg",
  },
  {
    id: 15,
    name: "Vegetable Stir Fry",
    description: "Fresh Veggies, Soy Sauce, Sesame Seeds.",
    price: 29,
    image: "https://foodish-api.com/images/pasta/pasta30.jpg",
  },
  {
    id: 16,
    name: "Ice Cream Sundae",
    description: "Vanilla Ice Cream, Chocolate Sauce, Nuts.",
    price: 25,
    image: "https://foodish-api.com/images/pasta/pasta25.jpg",
  },
  {
    id: 17,
    name: "Orange Juice",
    description: "Freshly Squeezed Oranges, No Sugar Added.",
    price: 17,
    image: "https://foodish-api.com/images/pasta/pasta14.jpg",
  },
  {
    id: 18,
    name: "Strawberry Cheesecake",
    description: "Creamy Cheesecake, Strawberry Topping, Biscuit Base.",
    price: 31,
    image: "https://foodish-api.com/images/pasta/pasta9.jpg",
  },
  {
    id: 19,
    name: "Sushi Platter",
    description: "Fresh Salmon, Tuna, Avocado, Rice Rolls.",
    price: 45,
    image: "https://foodish-api.com/images/pasta/pasta4.jpg",
  },
  {
    id: 20,
    name: "Falafel Wrap",
    description: "Crispy Falafel, Hummus, Pickled Veggies, Pita Bread.",
    price: 24,
    image: "https://foodish-api.com/images/pasta/pasta27.jpg",
  },
];

export const casher: ICasher[] = [
  {
    id: 1,
    qty: 1,
    name: "Grill Sandwich",
    price: 20,
    image:
      "https://www.midwestliving.com/thmb/qsmMak4sE4cJsekPLhTRBahPuYg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1554x0:1556x2)/101497359-2_smokin-grand-slam-sandwich.pg-b3c15f5251344e08b2530ff8c230b704.jpg",
  },
  {
    id: 2,
    name: "Veggie Burger",
    qty: 2,
    price: 25,
    image: "https://foodish-api.com/images/biryani/biryani57.jpg",
  },

  {
    id: 19,
    name: "Sushi Platter",
    qty: 3,
    price: 45,
    image: "https://foodish-api.com/images/pasta/pasta4.jpg",
  },
  {
    id: 17,
    name: "Orange Juice",
    qty: 5,
    price: 17,
    image: "https://foodish-api.com/images/pasta/pasta14.jpg",
  },
  {
    id: 15,
    name: "Vegetable Stir Fry",
    qty: 7,
    price: 29,
    image: "https://foodish-api.com/images/pasta/pasta30.jpg",
  },
  {
    id: 4,
    name: "Pasta Alfredo",
    qty: 10,
    price: 35,
    image: "https://foodish-api.com/images/biryani/biryani54.jpg",
  },
  {
    id: 8,
    name: "Caesar Salad",
    qty: 20,
    price: 28,
    image: "https://foodish-api.com/images/samosa/samosa6.jpg",
  },
  {
    id: 6,
    name: "Mango Smoothie",
    qty: 20,
    price: 18,
    image: "https://foodish-api.com/images/butter-chicken/butter-chicken3.jpg",
  },
];

export const order: IOrder[] = [
  {
    id: 1,
    status: "Paid",
    totalPrice: 250,
  },
  {
    id: 2,
    status: "Paid",
    totalPrice: 5000,
  },

  {
    id: 3,
    status: "Paid",
    totalPrice: 500,
  },
  {
    id: 4,
    status: "Paid",
    totalPrice: 1000,
  },
  {
    id: 5,
    status: "Paid",
    totalPrice: 10000,
  },
  {
    id: 6,
    status: "Paid",
    totalPrice: 15000,
  },
  {
    id: 7,
    status: "Paid",
    totalPrice: 17000,
  },
];

export const orderDetails = {
  id: 1,
  status: "Paid",
  items: [
    {
      id: 1,
      qty: 5,
      name: "Grill Sandwich",
      description: "Beetroot, Potato, Bell Pepper, Sandwich Masala.",
      price: 20,
      image:
        "https://www.midwestliving.com/thmb/qsmMak4sE4cJsekPLhTRBahPuYg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1554x0:1556x2)/101497359-2_smokin-grand-slam-sandwich.pg-b3c15f5251344e08b2530ff8c230b704.jpg",
    },
    {
      id: 19,
      qty: 3,
      name: "Sushi Platter",
      description: "Fresh Salmon, Tuna, Avocado, Rice Rolls.",
      price: 45,
      image: "https://foodish-api.com/images/pasta/pasta4.jpg",
    },
    {
      id: 16,
      qty: 8,
      name: "Ice Cream Sundae",
      description: "Vanilla Ice Cream, Chocolate Sauce, Nuts.",
      price: 25,
      image: "https://foodish-api.com/images/pasta/pasta25.jpg",
    },
    {
      id: 20,
      qty: 10,
      name: "Falafel Wrap",
      description: "Crispy Falafel, Hummus, Pickled Veggies, Pita Bread.",
      price: 24,
      image: "https://foodish-api.com/images/pasta/pasta27.jpg",
    },
    {
      id: 18,
      qty: 12,
      name: "Strawberry Cheesecake",
      description: "Creamy Cheesecake, Strawberry Topping, Biscuit Base.",
      price: 31,
      image: "https://foodish-api.com/images/pasta/pasta9.jpg",
    },
  ],
};

export const productsTable: IMenu[] = [
  {
    id: 1,
    name: "Grill Sandwich",
    description: "Beetroot, Potato, Bell Pepper, Sandwich Masala.",
    price: 20,
    image:
      "https://www.midwestliving.com/thmb/qsmMak4sE4cJsekPLhTRBahPuYg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1554x0:1556x2)/101497359-2_smokin-grand-slam-sandwich.pg-b3c15f5251344e08b2530ff8c230b704.jpg",
    category: "food",
  },
  {
    id: 2,
    name: "Veggie Burger",
    description: "Lettuce, Tomato, Onion, Veg Patty, Special Sauce.",
    price: 25,
    image: "https://foodish-api.com/images/biryani/biryani57.jpg",
    category: "food",
  },
  {
    id: 3,
    name: "Cheese Pizza",
    description: "Mozzarella, Basil, Tomato Sauce, Crispy Crust.",
    price: 30,
    image: "https://foodish-api.com/images/rice/rice1.jpg",
    category: "food",
  },
  {
    id: 4,
    name: "Pasta Alfredo",
    description: "Creamy Alfredo Sauce, Parmesan, Fresh Herbs.",
    price: 35,
    image: "https://foodish-api.com/images/biryani/biryani54.jpg",
    category: "food",
  },
  {
    id: 5,
    name: "Club Sandwich",
    description: "Grilled Chicken, Lettuce, Tomato, Mayo.",
    price: 22,
    image: "https://foodish-api.com/images/rice/rice7.jpg",
    category: "food",
  },
  {
    id: 6,
    name: "Mango Smoothie",
    description: "Fresh Mango, Yogurt, Honey, Ice.",
    price: 18,
    image: "https://foodish-api.com/images/butter-chicken/butter-chicken3.jpg",
    category: "food",
  },
  {
    id: 7,
    name: "French Fries",
    description: "Crispy Golden Fries with Seasoning.",
    price: 15,
    image: "https://foodish-api.com/images/biryani/biryani51.jpg",
    category: "food",
  },
  {
    id: 8,
    name: "Caesar Salad",
    description: "Romaine Lettuce, Croutons, Parmesan, Caesar Dressing.",
    price: 28,
    image: "https://foodish-api.com/images/samosa/samosa6.jpg",
    category: "food",
  },
  {
    id: 9,
    name: "Chocolate Brownie",
    description: "Rich Dark Chocolate, Walnuts, Fudgy Texture.",
    price: 20,
    image: "https://example.com/chocolate-brownie.jpg",
    category: "food",
  },
  {
    id: 10,
    name: "Berry Pancakes",
    description: "Blueberries, Maple Syrup, Fluffy Pancakes.",
    price: 27,
    image: "https://foodish-api.com/images/samosa/samosa20.jpg",
    category: "food",
  },
  {
    id: 11,
    name: "Spicy Tacos",
    description: "Grilled Chicken, Jalapeños, Cilantro, Salsa.",
    price: 26,
    image: "https://foodish-api.com/images/dosa/dosa59.jpg",
    category: "food",
  },
  {
    id: 12,
    name: "Tomato Soup",
    description: "Fresh Tomato, Basil, Cream, Crunchy Croutons.",
    price: 23,
    image: "https://foodish-api.com/images/pasta/pasta23.jpg",
    category: "food",
  },
  {
    id: 13,
    name: "BBQ Chicken Wings",
    description: "Smoked BBQ Sauce, Tender Chicken, Spices.",
    price: 32,
    image: "https://foodish-api.com/images/pasta/pasta17.jpg",
    category: "food",
  },
  {
    id: 14,
    name: "Garlic Bread",
    description: "Toasted Bread, Garlic Butter, Herbs.",
    price: 12,
    image: "https://foodish-api.com/images/pasta/pasta29.jpg",
    category: "food",
  },
  {
    id: 15,
    name: "Vegetable Stir Fry",
    description: "Fresh Veggies, Soy Sauce, Sesame Seeds.",
    price: 29,
    image: "https://foodish-api.com/images/pasta/pasta30.jpg",
    category: "food",
  },
  {
    id: 16,
    name: "Ice Cream Sundae",
    description: "Vanilla Ice Cream, Chocolate Sauce, Nuts.",
    price: 25,
    image: "https://foodish-api.com/images/pasta/pasta25.jpg",
    category: "food",
  },
  {
    id: 17,
    name: "Orange Juice",
    description: "Freshly Squeezed Oranges, No Sugar Added.",
    price: 17,
    image: "https://foodish-api.com/images/pasta/pasta14.jpg",
    category: "food",
  },
  {
    id: 18,
    name: "Strawberry Cheesecake",
    description: "Creamy Cheesecake, Strawberry Topping, Biscuit Base.",
    price: 31,
    image: "https://foodish-api.com/images/pasta/pasta9.jpg",
    category: "food",
  },
  {
    id: 19,
    name: "Sushi Platter",
    description: "Fresh Salmon, Tuna, Avocado, Rice Rolls.",
    price: 45,
    image: "https://foodish-api.com/images/pasta/pasta4.jpg",
    category: "food",
  },
  {
    id: 20,
    name: "Falafel Wrap",
    description: "Crispy Falafel, Hummus, Pickled Veggies, Pita Bread.",
    price: 24,
    image: "https://foodish-api.com/images/pasta/pasta27.jpg",
    category: "food",
  },
];
