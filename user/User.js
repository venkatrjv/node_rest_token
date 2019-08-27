var db = require('../configuration/dbConfig'); //reference of dbConfig.js

var User = {
    getAllUser: function (callback) {
        return db.query("Select * from user_tbl", callback);
    },
    addUser: function (user, callback) {
        return db.query("insert into user_tbl (first_name, last_name, email, gender) values (?,?,?,?)", [user.fName, user.lName, user.email, user.gender], callback);
    },
};
module.exports = User;