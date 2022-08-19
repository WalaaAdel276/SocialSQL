
const express =require("express");
const app = express();
const usersRoutes =require("./Modules/Users/Routes/usersRoutes")

app.listen(5000,()=>{
    console.log("App Running on port 5000!");

})

app.use(express.json());
app.use(usersRoutes);