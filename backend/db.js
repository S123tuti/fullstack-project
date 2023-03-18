const { connect } = require("mongoose")
require("dotenv").config();
const url = process.env.URL
let connection = connect(url).then(console.log("Mongo db is connected")).catch(console.log("err"));

module.exports=connection