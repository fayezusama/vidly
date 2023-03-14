const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.send("hello");
});
const port = process.env.PORT || 3000;
 
mongoose.connect('mongodb://localhost/test') 
    .then(() => console.log('connected to mongoDB...'))
    .catch(err => console.error('could not connect to MongoDB',err))

//app.listen(3000, () => console.log(`Listening on port ${port}...`));
