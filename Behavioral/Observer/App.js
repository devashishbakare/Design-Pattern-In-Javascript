const YouTubeChannel = require("./YoutubeChannel");
const YouTubeSubscriber = require("./YoutubeSubscriber");
// Create a YouTube Channel
const techChannel = new YouTubeChannel("TechExplained");

// Create Subscribers
const alice = new YouTubeSubscriber("Alice");
const bob = new YouTubeSubscriber("Bob");
const charlie = new YouTubeSubscriber("Charlie");

// Subscribe to the channel
techChannel.subscribe(alice);
techChannel.subscribe(bob);

// Upload a video
techChannel.uploadVideo("Understanding Design Patterns");

// Another subscriber joins
techChannel.subscribe(charlie);

// Upload another video
techChannel.uploadVideo("Observer Pattern Explained");

// Unsubscribe a user
techChannel.unsubscribe(alice);

// Upload a third video
techChannel.uploadVideo("Facade Pattern in Action");
