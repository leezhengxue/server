console.log("hello? yo bu sei yo ");


// const express = require('express');
// const app = express();
// const port = 3000;
// const path = require('path');

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// })

// app.get('/route',(req,res) => {
//     res.send("another route");
// })
// app.get('/index',(req,res) => {
//   res.sendFile(path.join( __dirname + '/index.html' ));
// })

// app.listen(port, () => {
//   console.log(`Dev app listening on port ${port}`);
// })

// const { Client } = require('pg');
// const client = new Client({
//    user : "postgres",
//    password : "leezx",
//    host : "localhost",
//    port : 5432,
//    database : "test"
//  })

//  client.connect(err => {
//    if (err) {
//      console.error("Connection Error", err.stack);
//    } else {
//      console.log("Connected");
//    }  
//  })


//  client.query(`SELECT * FROM person`, (err, result) => {
//    if(!err){
//      console.log(result.rows);
//    }
//    client.end();
//  })
