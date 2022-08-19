// Assignment  7: 
// Using sequelize :
// Create two tables Users ( id , fristName, lastName,email , password ) and Posts ( postid, created by = userid , title, content) 
// 1- relate the two tables , FK( createdby= userid) 
// 2- addUser 
// 3-create post by specific user
// 4- update post by id ( make sure , the owner of the post only can update it )
// 5- delete post by id (make sure , the owner of the post only can delete it )
// 6-get posts with their owner info
// 7- generate one API checks the query 
// if the querykey is:
//    i-(id)==> getoneuser by id with his posts (using include) 
//    ii-(search key ) ==> 
//     Getallusers that their fistName or       lastName contain the searchkey
//    iii- otherwise, get all users with their      posts (using include) 
// 8- update user by id 
// 9- delete user by id 


const express = require("express")
const app = express();
const userRoutes = require("./Modules/users/routes/userRoutes");
const postRoutes =require("./Modules/posts/routes/postRoutes");
const { createTable } = require("./configuration/config");

app.use(express.json())
createTable();
app.use(userRoutes,postRoutes)



app.listen(5000,()=>{
    console.log('App Listening on port 5000!');
   });