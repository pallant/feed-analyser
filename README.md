[![Build Status](https://travis-ci.org/pallant/feed-analyser.svg?branch=master)](https://travis-ci.org/pallant/feed-analyser)

# README

Looks for mentions of keywords in a feed.


## Installation

Make sure you run npm install

```bash
npm install feed-analyser --save
```

## Usage

```js
/**
 * @param feed Array This is an array of stringsor objects to analyse
 * @param keywords Array an array of keywords
 * @param options Object of customisation options (see docs)
 */
FeedAnalyser.analyse(feed, keywords, options)
  .then((analysis) => {
      console.log({ status: 1, analysis: analysis });
  })
  .catch((err) => {
      console.log({ status: 0, statusMessage: err });
  });
```


## Customisation

You can customise the functionality of FeedAnalyser by supplying options.

### feedKey
If your feed isn't just an array of strings, and has other properties (e.g. a twitter feed). You can supply the key of the text to analyse.

```js
var feed = [
    {
        description: "This is the text I want to analyse"
    },
    {
        description: "This is some more text to analyse"
    }
];

var options = {
    feedKey: 'description'
}

FeedAnalyser.analyse(feed, keywords, options)...

```

### keywordOccurences
This function is used to determine how many times one of the keywords occurs in one of the feed items.

#### Parameters
* `item` - __required__ `string` - The feed item to search in
* `keyword` - __required__ `string` - The keyword to look for

#### Return
Returns an `integer`, the number of occurrences of the keyword in the item.

#### Example

```js
var options = {
    keywordOccurences: function(item, keyword) {
        // Will only ever return 1 or 0
        return item.includes(keyword);
    }
};

FeedAnalyser.analyse(feed, keywords, options)...
```

--------

### qualityScore
This function looks at the analysis of the entire feed and returns a score based on the mentions.


#### Parameters
*None*

#### Return

Returns a `float`

#### Example

```js
var options = {
    qualityScore: function() {
        // Total number of mentions * (tweets that has mentions / 10)
        var mentionedFactor = 0;

        for( let i = 0; i < this.__feed.length; ++i ){
            if ( this.__feed[i].mentions ) {
                mentionedFactor += .1;
            }
        }

        // Round to 2 decimal places
        return Math.round( (this.__analysis.totalMentions * mentionedFactor)*100 ) / 100;
    }
};

FeedAnalyser.analyse(feed, keywords, options)...
```

--------

### cleanString
This is for standardising the feed and keywords.

Default functionality is making everything lowercase and removing accented characters

#### Parameters
* `str` - __required__ string - The string to clean

#### Return

Returns a `string`

#### Example

```js
var options = {
    cleanString: function(str) {
        // Lowercase and replace dashes with spaces
        return str.toLowerCase().replace("-", " ");
    }
};

FeedAnalyser.analyse(feed, keywords, options)...
```

--------

## Running tests

```
npm test
```