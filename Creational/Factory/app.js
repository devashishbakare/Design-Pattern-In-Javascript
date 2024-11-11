const PizzaFactory = require("./PizzaFactory");

const pizzaFactory = new PizzaFactory();

const PannerCheese = pizzaFactory.preparePizza("Paneer chesse");
if (PannerCheese == null) {
  console.log("panner is null");
} else {
  PannerCheese.createPizza();
}

const Pepperoni = pizzaFactory.preparePizza("Pepperoni");
if (Pepperoni == null) {
  console.log("pepperoni is null");
} else {
  Pepperoni.createPizza();
}
