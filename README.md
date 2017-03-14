# README #

Looks for mentions of keywords in a feed.

## Installation

Make sure you run npm install

```
npm install feed-analyser --save
```

## Usage

```js
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