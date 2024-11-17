function YouTubeChannel(channelName) {
  this.channelName = channelName;
  this.subscribers = [];
  this.latestVideoTitle = "";

  // Add a subscriber
  this.subscribe = function (subscriber) {
    this.subscribers.push(subscriber);
    console.log(`${subscriber.name} subscribed to ${this.channelName}`);
  };

  // Remove a subscriber
  this.unsubscribe = function (subscriber) {
    this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
    console.log(`${subscriber.name} unsubscribed from ${this.channelName}`);
  };

  // Notify all subscribers
  this.notifySubscribers = function () {
    this.subscribers.forEach((subscriber) => {
      subscriber.update(this.channelName, this.latestVideoTitle);
    });
  };

  // Upload a video and notify subscribers
  this.uploadVideo = function (videoTitle) {
    this.latestVideoTitle = videoTitle;
    console.log(`${this.channelName} uploaded a new video: ${videoTitle}`);
    this.notifySubscribers();
  };
}

module.exports = YouTubeChannel;
