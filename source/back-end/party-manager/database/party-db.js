var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/party-manager', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let db = mongoose.connection;

var partySchema = new mongoose.Schema({
  partyName: '',
  userName: '',

});

let AccountModel = mongoose.model('party', partySchema);

db.on('error', console.error.bind(console, 'connection error'));

exports.create = obj => {
  
  var newAccount = new AccountModel(obj);
  
  return newAccount.save();
};

exports.find = obj => {
 let querry = AccountModel.findOne({partyName: obj.partyName});
 return querry.exec();
}

exports.getById = id => {
  let querry = AccountModel.findOne({ _id: id });
  return querry.exec();
};
