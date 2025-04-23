// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://nitin046:cool2566@cluster0.hgarwc3.mongodb.net/");
  console.log("Connected to MongoDB Atlas");

  
}
module.exports = main;