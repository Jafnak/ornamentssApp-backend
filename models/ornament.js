const mongoose = require("mongoose")
const schema = mongoose.Schema(
{
    "title":String,
    "description":String,
    "price":String
}
)
let ornamentmodel = mongoose.model("ornaments",schema);
module.exports={ornamentmodel}