const Sequelize  =  require('sequelize');

const dbConnection =  new Sequelize('Binder','root','sandamiano',{
    host:'localhost',
    dialect:'mysql'
});

let User = dbConnection.define('user',{
    firstname:Sequelize.STRING,
    surname : Sequelize.STRING,
    email: Sequelize.TEXT
});

dbConnection.sync()
.then(()=>{
    User.findById(1).then((user) =>{
        console.log(JSON.stringify(user.dataValues,undefined,2));
    })
})
.catch(error =>console.log(error));