const Level1 = require("./Level1");
const Level2 = require("./Level2");
const Level3 = require("./Level3");

const level1 = new Level1();
const level2 = new Level2();
const level3 = new Level3();

level1.setNextHandler(level2).setNextHandler(level3);

level1.handleRequest("basic");
level1.handleRequest("advance");
level1.handleRequest("unknown");
