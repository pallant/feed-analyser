var FeedAnalyser = require('./index.js');

var feed = ['Hello my name is joel and I work for simon and ben', 'I work with arran', 'ben works in chichester'];
var keywords = ['joel','arran','simon','ben'];


// Run the analysis
FeedAnalyser.analyse(feed, keywords)
  .then((analysis) => {
      console.log({ status: 1, analysis: analysis });
  })
  .catch((err) => {
      console.log({ status: 0, statusMessage: err });
  });

