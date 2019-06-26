var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const {dbConnectionInfo} = require('../config');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('fuck off');
});


router.post('/upload', function(req, res, next) {
    console.log(req.body)
});

router.post('/getall', function(req, res, next) {
    args=req.body
    // let connection = mysql.createConnection(dbConnectionInfo);
    // connection.end()
    respond=[]
    respond.push({success:true})
    res.send(respond)
});

router.post('/download', function(req, res, next) {
    console.log(req.body)
});

router.post('/test', function(req, res, next) {
    console.log(req.body)
  res.send({
    awsl:23333
  });
});

module.exports = router;
