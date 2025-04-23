const express = require('express')
const app = express()
const port = 3000
const dbConnect = require('./config/db')
const User = require('./models/userSchema')

dbConnect().catch((err )=> console.log(err))

app.get('/addData', async(req, res) => {
   const data = {
    name: "raju", // String is shorthand for {type: String},
    email: "test@gmail.com",
phone: "123456789",
      password: 123456,};

const user=new User(data);
await user.save();

res.json({
     msg: 'User saved',
    user,
 });
 res.send("User saved");
 });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})