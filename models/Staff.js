var mongoose = require("mongoose");

//登陆人员的schema！
var schema = new mongoose.Schema({
  "email": String,
  "password": String

});

var Staff = mongoose.model("Staff", schema);
module.exports = Staff;
