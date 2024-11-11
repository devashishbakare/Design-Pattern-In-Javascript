const PaneerChesee = require("./PannerCheese");
const Pepperoni = require("./Pepperoni");
class PizzaFactory {
  preparePizza(pizzaName) {
    if (pizzaName.toLowerCase() === "paneer chesse") {
      return new PaneerChesee();
    } else if (pizzaName.toLowerCase() === "pepperoni") {
      return new Pepperoni();
    } else {
      return null;
    }
  }
}
module.exports = PizzaFactory;
