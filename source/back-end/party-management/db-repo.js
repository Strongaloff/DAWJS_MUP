var dbContext = require("./db");

function addNew(partyName, hostName) {
  let party = new Party(partyName, hostName);

  console.log(dbContext);

  //   dbContext.insert(party);
}

module.exports = {
  addNew: addNew
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
console.log(Date.now);
