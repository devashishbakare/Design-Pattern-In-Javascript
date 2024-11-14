function HighQualityImage(fileName) {
  this.fileName = fileName;
  this.displayImage = function () {
    console.log("Here is your ", this.fileName, "high quality image");
  };
}
module.exports = HighQualityImage;
