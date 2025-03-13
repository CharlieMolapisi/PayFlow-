const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors());

app.get('/', (re, res)=> {
    return res.json("From Backend Side");

})

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "database_test1"
})

app.post('/login_test1', (req, res)=> {
    const sql = "INSERT INTO login_test1 (firstName, surName, username, password) VALUES (?, ?, ?, ?)";
    db.query(sql, [req.body.name, req.body.surname, req.body.username, req.body.password], (err, data)=> {
        if(err) return res.json({Message: "Error"});
        if(data.rowsAffected > 0) {
            return res.json("Addition Successful")
        } else {
            return res.json("Addition Failed")
        }
    })
})

app.listen(8081, ()=> {
    console.log("Listening...");
})