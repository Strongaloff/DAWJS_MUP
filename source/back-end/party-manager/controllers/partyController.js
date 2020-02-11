var accountDb = require("../database/party-db");
var userDb = require("../database/user.db");
exports.createParty = (req, res) => {
  partyObj = req.body;
  console.log(partyObj);
  
  accountDb.find(partyObj).then(result => {
    if(result !== null) {
      res.status(403).send("already exists");
      return;
    } else {

      accountDb.create(partyObj).then(resp => {
        userDb.create({partyId: resp._id, userName: partyObj.userName })
        .then(resp => {
          res.send(resp);
        })
      });
    }
  })
};

exports.joinUser = (req, res) => {
  userObj = req.body



  userDb.find({userName: userObj.userName}).then(result => {
    console.log(result);
    if(result === null) {
      userDb.create(userObj).then(result => {
        res.send(result);
      });
    } else {
      res.status(403).send("already exists")
    }
    
  })
}

exports.getInviteCode = (req, res) => {
  partyObj = req.body;
  accountDb.find(partyObj).then(resp => {
    res.send(resp);
  })
}

exports.getAllUsers = (req, res) => {
  partyObj = req.body;
  
  userDb.getAllUsers().then(result => {
    res.status(200).send(result.filter(user => user.partyId == partyObj.inviteCode));
  })
}
exports.deleteCode = (req, res) => {

}

