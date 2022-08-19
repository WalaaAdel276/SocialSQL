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

const connection = require("../../../configration/config");

const getAllUsers = (req, res, next) => {
    connection.execute('SELECT * FROM users', (err, data) => {
        if (err) throw new Error(err);
        res.json({ message: "success", data })
    })
}
const addNewUser = (req, res, next) => {
    const { first_name, last_name, email, age, password, location, dept, is_admin } = req.body;
    let date = new Date().toISOString().split("T")[0] +
        " " + new Date().toTimeString().split(" ")[0];
    connection.execute(` INSERT INTO users (first_name,last_name,email,age,password,location,dept,is_admin,registerd_date) values ('${first_name}','${last_name}','${email}','${age}','${password}','${location}','${dept}','${is_admin}','${date}')`, (err, data) => {
        if (err) throw new Error(err);
        res.json({ message: " User added successfully", data });


    })
}
const updateByID = (req, res, next) => {
    const { id, email , password } = req.body;
    connection.execute(`UPDATE users set email ='${email}',password ='${password}' WHERE id=${id} `, (err, data) => {
        if (err) throw new Error(err);
        res.json({ message: " User Updated successfully", data });

    })
}
const deleteByID = (req, res, next) => {
    const { id } = req.body;
    connection.execute(`DELETE FROM users WHERE id = ${id} `, (err, data) => {
        if (err) throw new Error(err);
        res.json({ message: " User deleted", data });
    })
}
const getUserByID = (req, res, next) => {
    const { id } = req.body;
    connection.execute(`SELECT * FROM users where id= ${id}`, (err, data) => {

        if (err) throw new Error(err);
        res.json({ data });
    })
}
const searchByName = (req, res, next) => {
    const { first_name } = req.body;
    connection.execute(`SELECT * FROM users where first_name like '${first_name}'`, (err, data) => {
        if (err) throw new Error(err);
        res.json({ data });

    })
}
const getAllUsersReversed = (req, res, next) => {
    const { id } = req.body;
    connection.execute(`SELECT *, REVERSE(First_name) AS Reverse  
    FROM users where id =${id}`, (err, data) => {
        if (err) throw new Error(err);
        res.json({ data });
    })
}

const getByAge = (req, res, next) => {

    connection.execute('SELECT * FROM users where age between 20 AND 40', (err, data) => {

        if (err) throw new Error(err);
        res.json({ data });
    })

}
const getByNameS = (req, res, next) => {

    connection.execute(`SELECT * FROM users where first_name LIKE '%a' AND age <30 `, (err, data) => {

        if (err) throw new Error(err);
        res.json({ data });
    })

}
const getByNameE = (req, res, next) => {

    connection.execute(`SELECT * FROM users where last_name LIKE 'b%' AND age > 50  `, (err, data) => {

        if (err) throw new Error(err);
        res.json({ data });
    })

}
const getByNameC = (req, res, next) => {

    connection.execute(`SELECT * FROM users where first_name or last_name  LIKE '%r%' and age between 20 AND 25 `, (err, data) => {

        if (err) throw new Error(err);
        res.json({ data });
    })

}

module.exports = {
    getAllUsers,
    addNewUser,
    updateByID,
    deleteByID,
    getUserByID,
    searchByName,
    getAllUsersReversed,
    getByAge,
    getByNameS,
    getByNameE,
    getByNameC

}