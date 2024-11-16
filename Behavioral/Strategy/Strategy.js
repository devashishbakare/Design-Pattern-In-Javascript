function quickSort() {
  this.sort = function (nums) {
    console.log("sorting with quick sort");
    return nums.sort((a, b) => a - b);
  };
}
function bubbleSort() {
  this.sort = function (nums) {
    console.log("sorting with bubble sort");
    return nums.sort((a, b) => a - b);
  };
}

function SortingStrategy() {
  this.strategy = null;

  this.setStrategy = function (strategy) {
    this.strategy = strategy;
  };
  this.sort = function (nums) {
    if (!this.strategy) {
      console.log("No Strategy Define");
      return this.strategy;
    }
    return this.strategy.sort(nums);
  };
}

let nums = [10, 20, 3, 200];

const strategy = new SortingStrategy();
strategy.setStrategy(new quickSort());
let updatedNums = strategy.sort(nums);
console.log(updatedNums);

let nums1 = [10, 20, 3, 2];
strategy.setStrategy(new bubbleSort());
updatedNums = strategy.sort(nums1);
console.log(updatedNums);
