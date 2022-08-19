

const { Users } = require("../../users/Model/userModel");
const Posts = require("../Model/postModel");

const getAllPosts = async (req, res, next) => {
    try {
        const data = await Posts.findAll({include:Users})
        res.json({ message: "Success", data })
    } catch (error) {
        res.json({ message: 'Error', error })
    }

}



const addPosts = async (req, res, next) => {
    const { title, content, createdBy } = req.body
    try {
        const data = await Posts.create({ title, content, createdBy })
        res.json({ message: "Added Successfully", data })
    } catch (error) {
        res.json({ message: 'Error', error })
    }
}

const updatePost = async (req, res, next) => {
    const { id, post_id } = req.params;
    const { title, content } = req.body;
    try {
        const data = await Posts.update({ title, content }, {
            where: {
                createdBy: id,
                post_id
            }
        })
        if (data[0]) {
            res.json({ message: "Updated Successfully", data })
        } else {
            res.json({ message: "User Not Found" })

        }
    } catch (error) {
        res.json({ message: 'Error', error })
    }
}

const deletePost = async (req, res, next) => {
    const { id, post_id } = req.params;
    try {
        const data = await Posts.destroy({
            where: {
                createdBy: id,
                post_id
            }
        })
        if (data) {
            res.json({ message: "Deleted Successfully", post_id })
        } else {
            res.json({ message: "User Not Found" })

        }
    } catch (error) {
        res.json({ message: 'Error', error })
    }
}


module.exports = {
    getAllPosts,
    addPosts,
    updatePost,
    deletePost
}