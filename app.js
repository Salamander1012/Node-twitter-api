var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
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

