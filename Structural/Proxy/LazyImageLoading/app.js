const HighQualityImageProxy = require("./HighQualityImageProxy");

let highQualityImageProxy = new HighQualityImageProxy("Dog.jpg");
console.log("Loader and then display image");
highQualityImageProxy.displayImage();

console.log("No loader and display image");
highQualityImageProxy.displayImage();
