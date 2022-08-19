const { newSequelize } = require("../../../configuration/config");
const { DataTypes } = require("sequelize");

// id , fristName, lastName,email , password 

const Users = newSequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },

    first_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(100)
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(20)
    }

}, {
    timeStamps: true,
}

);

module.exports ={
    Users
}