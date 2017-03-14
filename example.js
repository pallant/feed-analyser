var FeedAnalyser = require('./index.js');

// var feed = [ { id: 123123, text: 'Hello my name is joel and I work for simon and ben'}, {text: 'I work with arran'}, {id: 123, text: 'ben works in chichester'}];
// var keywords = ['joel','arran','simon','ben'];

var feed = [
    "Took longer than two hours to prepare this. And I opted for white wine afterwards. In a glass",
    "At last — a diet for those of us that struggle with discipline http://thetim.es/2mAajON",
    "Perhaps the ultimate pie for #BritishPieWeek — cottage pie ❤️ http://thetim.es/2mVZfZF ",
    "Giving up crisps for Lent isn’t easy, Mrs May",
    "The items you should keep in your fridge",
    "Racing? No, we go to Goodwood for haunch of lamb",
    "Sneak peek of @LocLocatelli sampling our pizzas today in his restaurant on Portman Sq. for the @TimesFood pizza tasting!",
    "Who ordered the Hawaiian?! giorgiolocatelli1 reviews supermarket pizza for thetimes at the… https://www.instagram.com/p/BQ2L3vFlr9t/ ",
    "Huge thanks to everyone at @LocLocatelli - We made a top Italian chef eat frozen pizza",
    "Warm up with Thai-style aubergine curry for Dinner Tonight recipe pg 2Tomes/@TimesFood @sarajcox",
    "Mochi — a pudding that’s not bad for you",
    "Meet Jamie Wood, son of a Rolling Stone, king of the lettuce-bun burger",
    "Excellent piece by @onepoundmeals in today's @TimesFood - frugality without the hardship",
    "This pie soars like @Pharrell’s “Mountain” hat http://thetim.es/2iNDgRi ",
    "Reward yourself for making it through the first week of January with this exotic Jambalaya http://thetim.es/2iLar9F ",
    "A crisp restaurant in Soho? @CarolMidgley has the lowdown http://thetim.es/2gkYzws",
    '"The making of great wine is more of a public service" Read our interview with @TwoPaddocks http://thetim.es/2gk79LP',
    "Rat burgers, veggie yoghurt and unicorn toast.  That's the next three #Shoreditch theme restaurants sorted, then   http://www.thetimes.co.uk/article/the-foodie-barometer-whats-hot-whats-not-jrdw0np98?shareToken=ba77fac68dcb1b6569d41b0dcd25b634",
    "Follow the Bear... UBrew's rocket fuel aptly named",
    "Only one @HotelChocolat Halloween bite left... and it's orange cream - boo wooooh!"
];

var keywords = ['wine','pie','cottage pie', 'crisps', 'lamb','pizza', 'thai-style', 'aubergine','curry','dinner','breakfast','pudding','lettuce','bun','burger','jambalaya','veggie','yoghurt','toast', 'orange','cream']


// Run the analysis
FeedAnalyser.analyse(feed, keywords)
  .then((analysis) => {
      console.log({ status: 1, analysis: analysis });
      console.log(JSON.stringify(analysis));

  })
  .catch((err) => {
      console.log({ status: 0, statusMessage: err });
  });

