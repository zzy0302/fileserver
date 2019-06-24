var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const {dbConnectionInfo} = require('../config');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/create', function(req, res, next) {
    console.log(req.body)
    args=req.body
    let connection = mysql.createConnection(dbConnectionInfo);
    respond=[]
    //connection.query('select * from user' ,(err,r)=>{
    connection.query('insert into user ( sid, name, password ) values ( ?, ?, ? )' ,[ args.sid, args.name, args.password], (err,r)=>{
        if(err){
            connection.end();
            respond.push({
                success:false
            })
            res.send(respond);
        }
        else {
            connection.end();
            respond.push({
                success:true
            })
            res.send(respond);
        }            
    });
});

router.post('/login', function(req, res, next) {
    console.log(req.body)
    args=req.body
    let connection = mysql.createConnection(dbConnectionInfo);
    respond=[]
    //connection.query('select * from user' ,(err,r)=>{
    connection.query('select * from user where sid = ? limit 1' ,[ args.sid ], (err,r)=>{
        if(err){
            connection.end();
            res.send({success:false})
        }
        else {
            connection.end()
            console.log(r.toString().length)
            if (r.toString().length===0){
                res.send({success:false})
            }
            else {
                respond=r.map((item)=>{
                if (item.password.length > 0) {
                    console.log(args.password,item.password)
                    return {success:args.password===item.password?true:false}
                }
                else {
                    return {success:false}
                }
            })
            res.send(respond);
            }
        }            
    });
});

router.post('/test', function(req, res, next) {
    console.log(req.body)
  res.send({
    awsl:23333
  });
});

module.exports = router;
