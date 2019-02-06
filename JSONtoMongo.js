'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

//var db = mongoose.connection;

mongoose.connect(config.db.uri, {useNewUrlParser: true }, function(err) {
    if (err) throw err;
    else console.log('Successful connection');
});


/* Connect to your database */

fs.readFile('listings.json', 'utf8', function (err, list) {
    if (err) throw err;

    var listings = JSON.parse(list);
    listings.entries.forEach(function (listing) {
        var listModel = new Listing(listing);
        listModel.save(function (err) {
            if (err) throw err;
        })
    })
});

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */


/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */