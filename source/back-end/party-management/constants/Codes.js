const Status = {
  OK: "200",
  CREATED: "201",
  FORBIDDEN: "403",
  BADREQUEST: "400"
};

const type = {
  success: "succ",
  failure: "failure"
};

class Operation {
  constructor(codeType, obj) {
    this.codeType = codeType;
    this.obj = obj;
  }

  IsSuccess() {
    return this.codeType === type.success ? true : false;
  }
}

module.exports = {
  Status: Status,
  Operation: Operation,
  types: type
};
