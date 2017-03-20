var FeedAnalyser = require('./index.js');

var feed = [
    "crisps, sometimes but mostly currys, curries, jams. James, And I opted for white wine afterwards. In a glass",
];

var keywords = ['wine','pie','cottage pie', 'jam', 'me', 'crisps', 'lamb','pizza', 'thai-style', 'aubergine','curry','dinner','breakfast','pudding','lettuce','bun','burger','jambalaya','veggie','yoghurt','toast', 'orange','cream']


// Run the analysis
FeedAnalyser.analyse(feed, keywords)
  .then((analysis) => {
      console.log({ status: 1, analysis: analysis });
      console.log(JSON.stringify(analysis));

  })
  .catch((err) => {
      console.log({ status: 0, statusMessage: err });
  });

