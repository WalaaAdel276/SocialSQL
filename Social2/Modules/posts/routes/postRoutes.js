const { getAllPosts, addPosts,updatePost ,deletePost} = require("../controller/postControl");

const  router= require("express").Router();


router.get("/posts",getAllPosts);
router.post("/posts",addPosts);
router.put("/posts/:id/:post_id",updatePost)
router.delete("/posts/:id/:post_id",deletePost);

module.exports = router;