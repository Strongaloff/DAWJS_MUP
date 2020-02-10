var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/account-manager', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let db = mongoose.connection;

var accountSchema = new mongoose.Schema({
  username: '',
  password: '',
  email: '',
  deviceId: ''
});

let AccountModel = mongoose.model('account', accountSchema);

db.on('error', console.error.bind(console, 'connection error'));

exports.create = obj => {
  var newAccount = new AccountModel(obj);
  return newAccount.save();
};

exports.login = obj => {
  let querry = AccountModel.findOne({ username: obj.username, password: obj.password});
  return querry.exec();
}

exports.getById = id => {
  let querry = AccountModel.findOne({ _id: id });
  return querry.exec();
};

exports.getByUsername = username => {
  let querry = AccountModel.findOne({ username: username });

  return querry.exec();
};

exports.getByEmail = email => {
  let querry = AccountModel.findOne({ email: email });

  return querry.exec();
};
