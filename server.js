const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const objectstocsv = require('objects-to-csv');
// const { parse } = require('json2csv');
const converter = require('json-2-csv');
const app = express()
const port = 5000;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.render("index");
})
app.post('/', async (req, res) => {
    var data = req.body.text;
    /* the first way to convert json to csv
    var arr=[];
    arr.push(data)
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
        // var t=JSON.parse(arr);
        // console.log(t);
    }
    */
   //the second way :) 
   /*
    const fields = ['field1', 'field2', 'field3'];
    const opts = { fields };
    the 3th way 
    try {
        const csv = parse(data,opts);
        console.log(csv);
    } catch (err) {
        console.error(err);
    }
    */
    //4th way
    /*
        const csv=new objectstocsv(data);
        await csv.toDisk('./test.csv');
        console.log(await csv.toString());
        res.download('./test.cvs')
        */
    // 5th way 
    /*
    converter.json2csv(arr, (err, csv) => {
        if (err) {
            throw err;
        }
    */
    /*
    to save it to the user pc 
        csv.toDisk('./test.csv');
        console.log(csv.toString());
        res.download('./test.cvs');
    });
    */
})
app.listen(5000, () => {
})



