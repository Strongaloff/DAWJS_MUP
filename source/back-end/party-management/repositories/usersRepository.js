var dbContext = require("../Database/userContext");
function addNew(userId, partyId, callback) {
  dbContext.find({ userId: userId, partyId: partyId }, result => {
    if (result === null) {
      let user = new User(userId, partyId);
      callback(dbContext.insert(user));
    } else {
      callback(null);
    }
  });
}

module.exports = {
  addNew: addNew
};

class User {
  constructor(userId, partyId) {
    this.userId = userId;
    this.partyId = partyId;
  }
}
