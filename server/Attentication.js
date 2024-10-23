const express = require('express')
const mysql = require('mysql')
const router = express.Router()
const jwt = require('jsonwebtoken');

const db = mysql.createConnection({
    user:'root',
    database:'drop_quick',
    password:'password',
    host:'localhost'
})

db.connect((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('connected successfly  to register database')
    }
})

router.post('/register',(req,res)=>{
      const {formData} =req.body
      const {firstName,lastName,email,  phone,  password,street,city,state,zip}=formData

      db.query('select * from register where phone =? or email=?',[phone,email],(err,results)=>{
        if(err){
            res.status(500).send('server is not working try after some time')
            console.log(err)
        }else if(!(results.length===0)){
            res.status(400).send('This number or email ID is already registered')
            console.log(results.length)
        }
        else{
            db.query('insert into register (firstName,lastName,email, phone,  userpassword,street,city,state,zip) values(?,?,?,?,?,?,?,?,?)',[firstName,lastName,email,  phone,  password,street,city,state,zip],(error,result)=>{
                if (error) {
                    res.status(500).json('Server not working')
                    console.log(error)
                } 
                else {
                    res.status(200).send('Registred Successfully')     
                }
            })
            
        }
    })
})

router.post('/forgetpassword',(req,res)=>{
const {data} = req.body
db.query('select * from register where (phone=? or email=?) and userpassword=?',[data.phoneoremail, data.phoneoremail,data.oldpassword],(error,result)=>{
    if(error){
        console.log(error)
        res.status(500).send('server is not working try aftersome time')
    }else if(result.length===0){
        res.status(404).send('Incorrect phonenumber or password')
    }else{
        db.query('update register set userpassword=? where (phone=? or email=?) and userpassword=?',[data.newpassword,data.phoneoremail, data.phoneoremail,data.oldpassword],(error,result)=>{
            if(error){
                console.log(error)
                res.status(500).send('server is not working try aftersome time')
            }else{
                res.status(200).send('Password Updated Sucessfully ')
            }
            
        })
    }
})
})

router.post('/login',(req,res)=>{
    const {formData} = req.body

    
    db.query('select * from register where (phone=? or email=?) and userpassword=?',[formData.phone,formData.phone,formData.password],(error,result)=>{
        if(error){
            console.log(error)
            res.status(500).send('server is not working try aftersome time')
        }else if(result.length===0){
            res.status(404).send('Incorrect phonenumber or password')
            console.log(result.length)
        }else{
            const user = result[0];

            // Generate JWT token
            const payload = { id: user.id, phone: user.phone }; // Include necessary fields in payload
            const secretKey = 'yourSecretKeyisdropquick'; // Use a secure, environment-based key
    
            // Token expiration set to 24 hours
            const token = jwt.sign(payload, secretKey, { expiresIn: '24h' });
    
            return res.status(200).send({ message: 'Authentication successful', token,user });
        }
    })    
})

module.exports =router;