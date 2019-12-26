let partyRepository = require("../repositories/repository");
let userRepository = require("../database/users/repository");

module.exports.joinUser = (userId, invitationCode, callback) => {
  partyRepository.getPartyByInvitationCode(invitationCode, partyId => {
    if (partyId === null) {
      callback(null);
    } else {
      userRepository.addNew(
        userId,
        partyId,
        (result => {
          if (result === null) {
            callback({ status: 203, obj: result });
          } else {
            callback({ stauts: 200, obj: result });
          }
        }).bind(callback)
      );
    }
  });
};
