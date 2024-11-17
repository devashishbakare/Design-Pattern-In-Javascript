function YouTubeSubscriber(name) {
  this.name = name;

  this.update = function (channelName, videoTitle) {
    console.log(
      `Hey ${this.name}, ${channelName} just uploaded a new video: ${videoTitle}`
    );
  };
}

module.exports = YouTubeSubscriber;
