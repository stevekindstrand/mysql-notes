var express = require("express");
var router = express.Router();
const mysql = require("mysql2");

//Post notes
router.post("/", (req, res) => {
  let saveNotes = req.app.locals.con.escape(req.body.text);
  let sql = `INSERT INTO notes (text) VALUES (${saveNotes})`;

  req.app.locals.con.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    }
    res.json(result);
  });
});

//Get notes
router.get("/:id", function (req, res) {
  let sql = `SELECT * FROM notes WHERE id`;

  req.app.locals.con.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    }
    res.json(result);
  });
});

//Delete notes
router.delete("/:id", function (req, res) {
  let sql = `DELETE FROM notes WHERE id=${req.params.id}`;

  req.app.locals.con.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    }
    res.json(result);
  });
});

//Update notes
router.put("/:id", function (req, res) {
  let sql = `UPDATE notes SET text="aa" WHERE id=${req.params.id}`;

  req.app.locals.con.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    }
    res.json(result);
  });
});

module.exports = router;
