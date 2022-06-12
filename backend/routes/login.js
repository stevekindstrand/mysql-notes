var express = require("express");
var router = express.Router();
const mysql = require("mysql2");

//Login
router.post("/", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  let sql = "SELECT * FROM users WHERE username = ? AND password = ?";

  req.app.locals.con.query(sql, [username, password], (err, result) => {
    if (err) {
      res.send({ err: err });
    }

    if (result.length > 0) {
      res.send(result);
    } else {
      res.send({ message: "Wrong username/password combination!" });
    }
  });
});

module.exports = router;
