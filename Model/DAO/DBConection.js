import mysql from 'mysql'


const db = mysql.createConnection({
    host : "sql10.freesqldatabase.com",
    user : "sql10647091",
    password : "wW9BMC42ss",
    database : "sql10647091"
})

export default db