var mongoClient = require('./node_modules/mongodb').MongoClient;
var url = 'mongodb://localhost:27017/party-management';

mongoClient.connect(url, (err, db) => {
  if (err) throw err;

  let collection = db.db('party-management').collection('party-info');
  exports.insert = function insert(obj) {
    collection.insert(obj, (err, res) => {
      if (err) throw err;

      return res;
    });
  };

  exports.getAll = function getAll(callback) {
    let items = collection.find({});
    items.toArray((err, docs) => {
      if (err) throw err;
      callback(docs);
    });
  };

  exports.find = function find(obj, callback) {
    collection.findOne(obj, (err, result) => {
      if (err) throw err;

      callback(result);
    });
  };
});