exports.register((req, res) => {
  return 'register';
});

exports.login((req, res) => {
  return 'login';
});

exports.forgotPasswordByEmail((req, res) => {
  return 'forgot by email';
});

exports.getById((req, res) => {
  return 'get by id';
});

exports.getByName((req, res) => {
  return 'get by name';
});
