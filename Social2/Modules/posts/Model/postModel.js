const { newSequelize } = require("../../../configuration/config");
const { DataTypes } = require("sequelize");
const { Users } = require("../../users/Model/userModel");



const Posts = newSequelize.define("posts", {
    post_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    }


},
    {
        timeStamps: true
    }

);
Users.hasMany(Posts, {
    foreignKey: 'createdBy',
    type: DataTypes.INTEGER,
    allowNull: false
});
Posts.belongsTo(Users,{foreignKey: 'createdBy'})
module.exports = Posts;