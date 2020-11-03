const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const app = express()
const port = 5000;
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.render("index");
})
app.post('/', async(req, res) => {
    var data=req.body.data;
    console.log(data);
})
app.listen(5000, () => {
  console.log("hi")
})



