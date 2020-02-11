var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/partyUser', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let db = mongoose.connection;

var userSchema = new mongoose.Schema({
  partyId: '',
  userName: '',
  favoredArtist: '',
  favoredGenere: '',
  favoredSong: ''
    
});

let UserModel = mongoose.model('partyUser', userSchema);

db.on('error', console.error.bind(console, 'connection error'));

exports.create = obj => {
  var newUser = new UserModel(obj);

  return newUser.save();
};

exports.getAllUsers = obj => {
    let query = UserModel.find({});
    return query.exec();
}

exports.find = obj => {
 let querry = UserModel.findOne({userName: obj.userName, partyId: obj.inviteCode});
 return querry.exec();
}
