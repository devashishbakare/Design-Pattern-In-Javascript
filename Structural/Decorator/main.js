const Coffee = require("./Coffee");
const Milk = require("./Milk");
const Cream = require("./Cream");

let coffee = new Coffee();
console.log(coffee.getDescription(), coffee.getCost());
coffee = new Milk(coffee);
console.log(coffee.getDescription(), coffee.getCost());
coffee = new Cream(coffee);
console.log(coffee.getDescription(), coffee.getCost());
