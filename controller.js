const { response } = require('express');
const User = require('./model');

// --- get all users
const getUsers = (req, res, next) => {
    User.find()
        .then(response => {
            if(response.length==0){
                res.json({"length":0})
            }
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        });
}

// ---- new user
const addUser = (req, res, next) => {

     const id = req.body.id;
     const name = req.body.name;

    console.log("data:",id);
    console.log("data:",name);

    if(id == null || name == null){
        console.log("NUll");
        res.json({"ERROR": "INPUT DATA NOT IDENTIFIED"})
    }else{
        const user = new User({
            id: req.body.id,
            name: req.body.name,
        });
        user.save()
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        });
    }
   
}

// --- update user
const updateUser =  (req, res, next) => {
    const { id, name } = req.body;
    console.log("ID:", id);
    User.updateOne( { id: id }, {$set: { name: name }} )
        .then(response=> { 
            res.json({response})
        })
        .catch(error => {
            res.json({error})
        });
}

// --- delete user
const deleteUser =  (req, res, next) => {
    const  id  = req.body.id;
   console.log("ID:", id);
    User.deleteOne( {id: id } )
        .then(response=> {
            res.json({ response })
        })
        .catch(error => {
            res.json({error})
        }); 
}

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;



