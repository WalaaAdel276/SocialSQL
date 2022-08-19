const { getAllUsers,addUsers,updateUser, deleteUser} = require("../controller/userControl");
const router =require("express").Router();



router.get("/users",getAllUsers);
router.post("/users",addUsers);
router.put("/users/:id",updateUser);
router.delete("/users/:id",deleteUser )




module.exports = router;