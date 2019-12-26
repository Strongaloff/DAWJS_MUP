let partyRepository = require("../repositories/partyRepository");
let userRepository = require("../repositories/usersRepository");

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
