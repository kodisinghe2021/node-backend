// import express
const express = require('express');

//import controller
const controller = require('./controller');

// initializing express
const app = express();

//import cors
const cors = require('cors');

// add middleware to express instance
// this middleware is [cors] cross origin resource sharing
// using extended: true, can convert nested objects
app.use(
    express.urlencoded({
        extended:true,
    })
);

// request and response using json
app.use(express.json());

// get request for return all users
app.get('/getusers', (req, res) => {
    controller.getUsers((req, res, next)=> {
        res.send();
    });
});

// post request for create new user
app.post('/createuser', (req, res)=> {
    controller.addUser(req.body, callback => {
        res.send();
    });
});

// post request for update new user
app.post('/updateuser',(req, res)=> {
    controller.updateUser(req.body, callback => {
        res.send(callback);
    });
});

// post request for delete new user
app.post('/deleteuser',(req, res)=> {
    controller.deleteUser(req.body, callback => {
        res.send(callback);
    });
});


// export module
module.exports = app;


