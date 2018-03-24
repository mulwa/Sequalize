const express = require('express');
const Sequelize  =  require('sequelize');
let router = express.Router();

const db = require('./../db/connection');


const User = db.define('user',{
    firstname:Sequelize.STRING,
    surname : Sequelize.STRING,
    email: Sequelize.TEXT
});


router.post('/',(req,res,next)=>{     
    User.create({
        firstname:req.body.firstname,
        surname:req.body.surname,
        email:req.body.email
    }).then((user)=>{        
        res.status(200).json({
            status: 'success',
            data: user
        })
        
    }).catch((error) =>{
        console.log('Not saved an error has occured'+error);
        res.status(500).json({
            status: 'failed',
            message: error.message

        })
    })
    
});

router.get('/',(req,res,next) =>{
    User.findAll().then((users)=>{
        console.log(JSON.stringify(users,undefined,2));
        res.status(200).json({
            users :users
        })
    }).catch((error) =>{
        console.log(`error occured ${error}`);
    })
})


// export router to be used in app.js
module.exports = router;