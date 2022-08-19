 const Sequelize = require("sequelize")
 const newSequelize = new Sequelize('DbNode','root','271996',{
     host:'localhost',
     dialect:'mysql'
 })

 const createTable =()=>{
    newSequelize.sync({alter:true}).then((result)=>{
        console.log(result);
    }).catch((err)=>{
        console.log(err);
    })
 }

 module.exports ={
    newSequelize,
    createTable
 }