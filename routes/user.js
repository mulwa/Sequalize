const express = require('express');
let router = express.Router();

router.post('/',(req,res,next)=>{
    console.log('from user post method');
    res.send("hello from user post method greeting");
});

module.exports = router;