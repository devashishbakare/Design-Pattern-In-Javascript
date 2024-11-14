const HighQualityImage = require("./HighQualityImage");
function HighQualityImageProxy(fileName) {
  this.fileName = fileName;
  this.highQualityImage = null;

  const showLoader = (fileName) => {
    console.log("We are loading your", fileName, "please wait...");
  };

  this.displayImage = function () {
    if (this.highQualityImage == null) {
      showLoader(this.fileName);
    }
    this.highQualityImage = new HighQualityImage(this.fileName);
    this.highQualityImage.displayImage();
  };
}

module.exports = HighQualityImageProxy;
