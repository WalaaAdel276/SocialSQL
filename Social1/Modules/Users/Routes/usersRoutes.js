// Assignment  5 :  using mysql and express 
// **Creat Apis to :
//  1-GetAllUser
// 2-AddUser
// 3- GetUserByID
// 4-Search by name use like
// 5-Get all user reversed
// 6- search user age between 20 and 40
// 7-get user name start with A and age less than 30 
// 8-get user name end with  d or age greater than 50 
// 9-get user name contain  r   and  age greater than 20 and less than 25



const router = require('express').Router();
 const { getAllUsers,addNewUser,updateByID,deleteByID,getUserByID,searchByName
    ,getAllUsersReversed,getByAge,getByNameS,getByNameE,getByNameC } = require('../Controller/controll')
 
 
router.get("/users", getAllUsers );
router.post("/addUser", addNewUser);
router.put("/updateUser",updateByID );
router.delete("/deleteUser", deleteByID);
router.get("/singleUserByID", getUserByID);
router.get("/userByName", searchByName);
router.get("/usersReversed", getAllUsersReversed);
router.get("/userByAge", getByAge);
router.get("/userByNameS", getByNameS);
router.get("/userByNameE", getByNameE);
router.get("/userByNameC", getByNameC);


module.exports = router;