const { query } = require("express");
const { Op } = require("sequelize");
const Posts = require("../../posts/Model/postModel");
const { Users } = require("../Model/userModel");


const getAllUsers = async (req, res, next) => {

    const { id, searchKey } = req.query;
    let data;
    try {
        if (id) {
            data = await Users.findAll({
                include: Posts,
                where: {
                    id
                }
            })

        }
        else if (searchKey) {
            data = await Users.findAll({
                include: Posts,
                where: {
                    [Op.or]: [
                        {
                            first_name: {
                                [Op.like]: `%${searchKey}%`
                            }
                        },
                        {
                            last_name: {
                                [Op.like]: `%${searchKey}%`
                            }
                        }

                    ]
                }
            })
        }
        else {
            data = await Users.findAll({ include: Posts })
        }
        res.json({ message: "Success", data })
    } catch (error) {
        res.json({ message: 'Error', error })
    }
}

const addUsers = async (req, res, next) => {
    const { first_name, last_name, email, password } = req.body;
    try {
        const data = await Users.create({ first_name, last_name, email, password });
        res.json({ message: "Added Successfully", data })
    } catch (error) {
        res.json({ message: "Error", error })
    }
}

const updateUser = async (req, res, next) => {
    const { id } = req.params;
    const { email, password } = req.body;
    try {
        const data = await Users.update({ email, password }, {
            where: {
                id
            }
        })
        if (data[0]) {
            res.json({ message: "Updated Successfully", data })
        } else {
            res.json({ message: "User Not Found" })
        }

    } catch (error) {
        res.json({ message: "Error", error })
    }

}

const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await Users.destroy({
            where: {
                id
            }

        });

        if (data) {
            res.json({ message: "Deleted", id })
        } else {
            res.json({ message: "User Not Found" })
        }


    } catch (error) {
        res.json({ message: "Error", error })
    }

}

module.exports = {
    getAllUsers,
    addUsers,
    updateUser,
    deleteUser
}