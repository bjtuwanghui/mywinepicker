var mongoose=require("mongoose");

//酒瓶的schema！
var schema=new mongoose.Schema({
  "id":Number,
  "type":String,
  "target":String,
  "material":String,
  "color":String,
  "height":String,
  "base":String,
  "body":String,
  "people":String,
  "semantics":String
});
var Wine=mongoose.model("Wine",schema);
module.exports=Wine;
