const Sequelize  =  require('sequelize');

const sequelize =  new Sequelize('Binder','root','sandamiano',{
    host:'localhost',
    dialect:'mysql'
});

sequelize.sync().then(() =>{
    console.log("Database connected successfully");
}).catch((error)=>{
    console.log(`Database connection failled ${error}`);
});
module.exports = sequelize;
