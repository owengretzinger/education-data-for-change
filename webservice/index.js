const express = require('express'); 
const mongodb = require('mongodb'); 
 
const app = express(); 
const MongoClient = mongodb.MongoClient; 
const url = "mongodb+srv://admin:LmV2u0SvqZDOBXlP@cluster0.hj0063q.mongodb.net/?retryWrites=true&w=majority"; 
 
app.get('/names', (req, res) => { 
    MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => { 
        if (err) { 
            res.status(500).send(err); 
        } else { 
            const db = client.db("education"); 
            const collection = db.collection('suspensions'); 
             
            let ret = []; 
 
            collection.find({}, { projection: { 'Board Name': 1, _id: 0 } }).forEach(function(doc) { 
                ret.push(doc); 
                 
            }, function(err) { 
                if(err) { 
                    res.status(500).send(err); 
                } 
                 
                res.status(200).send(ret); 
            }); 
 
        } 
    }); 
}); 
 
var server = app.listen(8081, function () { 
    var host = server.address().address 
    var port = server.address().port 
    console.log("Example app listening at http://%s:%s", host, port) 
 }) 
