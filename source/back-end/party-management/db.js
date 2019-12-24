var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/party-management";

const resp = {
  success: "success",
  failure: "error"
};

mongoClient.connect(url, (err, db) => {
  if (err) throw err;

  let dbo = db.db("party-management");
  function insert(obj) {
    dbObject._id = dbo.collection("party-info").insert(obj, (err, res) => {
      if (err) throw err;
      return resp.success;
    });
  }

  function getAll() {
    dbo.find({}).toArray((err, result) => {
      if (err) throw err;
      return result;
    });
  }

  module.exports = {
    insert: insert,
    getAll: getAll
  };
});
