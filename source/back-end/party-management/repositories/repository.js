var dbContext = require("../database/party/DbContext");
function addNew(partyName, hostName, callback) {
  dbContext.find({ name: partyName }, result => {
    if (result === null) {
      let party = new Party(partyName, hostName);
      callback(dbContext.insert(party));
    } else {
      callback(null);
    }
  });
}

function getInviteCode(partyName, callback) {
  dbContext.find({ name: partyName }, party => {
    callback(party.inviteCode);
  });
}

function getPartyByInvitationCode(invitationCode, callback) {
  dbContext.find({ inviteCode: invitationCode }, party => {
    callback(party._id);
  });
}
module.exports = {
  addNew: addNew,
  getInviteCode: getInviteCode,
  getPartyByInvitationCode: getPartyByInvitationCode
};

var playlistId = 1;

class Party {
  constructor(party_name, hostName) {
    this.name = party_name;
    this.playlistId = playlistId++;
    this.hostName = hostName;
    this.inviteCode = this.generateCode();
  }

  generateCode() {
    let hours = new Date(Date.now()).getHours();
    let minutes = new Date(Date.now()).getMinutes();
    return this.name + hours + minutes;
  }
}
