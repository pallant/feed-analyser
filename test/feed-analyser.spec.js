'use strict';

var chai = require('chai');
const expect = chai.expect;
var assert = require('assert');
var FeedAnalyser = require('../index.js');

const demoFeed = ['Hello my name is joel and joel works for simon and ben', 'I work with arran', 'ben works in chichester'];
const demoKeywords = ['joel','arran','simon','ben'];

describe('FeedAnalyser', function(){

    describe('cleanArray', function(){
        it('should return a cleaned feed', function(){
            let cleanedArray = FeedAnalyser.cleanArray(['ØnE','tWœ','ThRêe']);

            expect(cleanedArray).to.deep.equal(['one','two','three']);
        })
    });

    describe('cleanString', function(){
        it('should return a cleaned string', function(){
            let cleanedFeed = FeedAnalyser.cleanString('ØnE tWœ ThRêe');

            expect(cleanedFeed).to.equal('one two three');
        })
    });

    describe('cleanKeywords', function(){
        it('should return a cleaned array of keywords', function(){
            let cleanedKeywords = FeedAnalyser.cleanKeywords(['ØnE','tWœ','ThRêe']);

            expect(cleanedKeywords).to.deep.equal(['one','two','three']);
        })
    });



    describe('analyse', function(){
        it ('should return a promise', function(){
            expect(FeedAnalyser.analyse(['one'],['two'])).to.be.a('promise');
        });

        it ('should resolve a valid analysis', function() {
            return FeedAnalyser.analyse(['one'],['two']).then(function(f){
                expect(f).to.be.an('object');
            });
        });

    });

    describe('qualityScore', function(){
        it('should return a floating point number', function(){
            expect(FeedAnalyser.qualityScore()).to.equal(0);
        });

        it('should return a valid quality score', function(){
            return FeedAnalyser.analyse(demoFeed,demoKeywords).then(function(a){
                expect(FeedAnalyser.qualityScore()).to.equal(1.8);
            });
        });
    });

    describe('cleanFeed', function(){
        it('should return a cleaned feed', function(){
            let cleanedFeed = FeedAnalyser.cleanFeed(['ØnE','tWœ','ThRêe']);

            expect(cleanedFeed).to.deep.equal(['one','two','three']);
        });

        it('should return a cleaned feed with feedKey', function(){
            FeedAnalyser.options.feedKey = 'text';
            let cleanedFeed = FeedAnalyser.cleanFeed([{'text': 'ØnE'},{'text': 'tWœ'},{'text': 'ThRêe'}]);

            expect(cleanedFeed).to.deep.equal(['one','two','three']);
        })
    });

    describe('keywordOccurences', function(){
        it('should return the number of occurences of a string in another string', function(){
            expect(FeedAnalyser.keywordOccurences('one two two three three three', 'two')).to.equal(2);
        });
    });

});