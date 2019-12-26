let partyRepository = require("../database/party/repository");

module.exports.add = (partyName, hostName, callback) => {
  partyRepository.addNew(
    partyName,
    hostName,
    (result => {
      if (result === null) {
        callback({ status: 203, obj: result });
      } else {
        callback({ stauts: 200, obj: result });
      }
    }).bind(callback)
  );
};

module.exports.delete = party_name => {
  console.log("delete");
};

module.exports.getInviteCode = (partyName, callback) => {
  partyRepository.getInviteCode(
    partyName,
    (code => {
      callback({ status: 200, code: code.toString() });
    }).bind(callback)
  );
};
