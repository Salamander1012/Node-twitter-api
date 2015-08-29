var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'OJayGYZ5PPV604du4TqQ9WUBP',
  consumer_secret: 'VlUIVQTJlasram7BEJQHpFloM0dREcd4iwPzAH75wvMqn5bLNr',
  access_token_key: '1864506762-RJLwrzqPQG5ujLBdpnoHbCu77N2klasEpSgoqRj',
  access_token_secret: 'HzHAcJy8QW8q9lCrOSzdgobkrz2Ndk0d87FctlLsHSDIH'
});


/* POSTING TWEETS
client.post('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response){
  if(error) throw error;
  console.log(tweet);  // Tweet body.
  console.log(response);  // Raw response object.
});
*/
///////////////////////////////////////////////////////////////////////////////////

/**
client.stream('statuses/filter', {track: 'yolo'},  function(stream){
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});

**/

client.get('search/tweets', {geocode: '39.8991590,-74.9746170,5mi'}, function(error, tweets, response){
   console.log(tweets);
});


client.get('geo/search', {geocode: '39.8991590,-74.9746170,5mi'}, function(error, tweets, response){
   console.log(tweets);
});

