const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const objectstocsv=require('objects-to-csv')
const app = express()
const port = 5000;
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.render("index");
})
app.post('/', async(req, res) => {
    var data=req.body.text;
    function ConvertToCSV(objArray) {
        var array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
        var str = '';

        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var index in array[i]) {
                if (line != '') line += ','

                line += array[i][index];
            }

            str += line + '\r\n';
        }

        return str;
    }
    ConvertToCSV(data);
    console.log(data);
//     const csv=new objectstocsv(data);
//     await csv.toDisk('./test.csv');
//     console.log(await csv.toString());
//     res.download('./test.cvs')
})
app.listen(5000, () => {
})



