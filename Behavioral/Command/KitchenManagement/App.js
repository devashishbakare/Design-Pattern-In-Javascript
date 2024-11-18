const Kitchen = require("./Kitchen");
const Order = require("./Order");
const WaiterExecuter = require("./WaiterExecuter");

const kitchen = new Kitchen();
const dish1 = new Order(kitchen, "Pasta");
const dish2 = new Order(kitchen, "Burger");

const waiter = new WaiterExecuter();
waiter.execute(dish1);
waiter.execute(dish2);
