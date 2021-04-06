const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
//process.env.DATABASE_HOST
const connection = mysql.createConnection({
    host : 'db',
    port : '3306',
    user : 'root',
    password : 'password',
    database: 'test',
});
const app = express();
app.use(cors())

app.get('/about.json', function(req, res) {
    var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    var time = Math.floor(new Date().getTime() / 1000)
    var tryFetch = {
        client: {
            host: ip
        },
        server: {
            current_time: time,
            services: [{
        name: "weather",
        widgets: [{
            name: "city_weather",
            description: "Display temperature and weather for a city",
            params: [{
                name: "city",
                type: "string"
            }]
        }]
    }, {
        name: "pokedex",
        widgets: [{
            name: "searchName",
            description: "Display Pokemon information for a pokemon name",
            params: [{
                name: "pokename",
                type: "string"
            }]
        }, {
            name: "searchID",
            description: "Display Pokemon information for a pokemon ID",
            params: [{
                name: "pokeid",
                type: "integer"
            }]
        }]
    }, {
        name: "anime",
        widgets: [{
            name: "searchName",
            description: "Display anime list information matching the name",
            params: [{
                name: "name",
                type: "string"
            }]
        }, {
            name: "SearchSeason",
            description: "Display anime list information matching the season and the year",
            params: [{
                name: "year",
                type: "integer"
            }, {
                name: "season",
                type: "string"
            }]
        }]
    }]
                                                }}
    res.json(tryFetch);
})
app.get('/login', function (req, res) {
    console.log(req.query.username);
    console.log(req.query.password);
    connection.query("SELECT * FROM user WHERE username='" + req.query.username + "'", function (err, result, fields) {
        if (err) {
            console.log(err);
            res.status(500).send("Error database");
        }
        console.log("test");
        console.log(result);
        if (result[0].password == req.query.password) {
            console.log("yes");
            res.status(200).send("Hello World");
        } else {
            console.log("no");
            res.status(500).send("Error: password incorrect");
  //          res.send("202");
        }
    });
})
        
app.get('/signUp', function (req, res) {

    console.log(req.query.username);
    console.log(req.query.password);
    if (req.query.username != undefined && req.query.password != undefined) {
        connection.query("INSERT INTO user (username, password) VALUES ('" + req.query.username + "', '" + req.query.password + "')", function (err, result, fields) {
            if (err)
                console.log(err);
            console.log("yes ?");
            res.status(200).send("Hello World");
            //res.sendStatus(200)
           // res.json(tryFetch);
        });
    } else {
        //res.sendStatus(200)
        //res.json(tryFetch);
    }
    //res.sendStatus(200)
})
    /*connection.getConnection(function (err, conn) {
        console.log(err);
        
       conn.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
           if (error) throw error;
           res.send(results)
       });
       //res.send("test");
       console.log("test");
   });*/

app.listen(8080, () => {
    console.log('http://localhost:8080/signUp');
});
