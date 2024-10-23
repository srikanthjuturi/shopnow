const express = require('express')
const mysql = require('mysql')
const router = express.Router()
const verify = require('./SecurityMiddleware')

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
        console.log('connected successfly  to product table')
    }
})

router.get('/data',(req,res)=>{
    db.query('select * from productdetails',(err,result)=>{
        if(err){
            console.log(err)
            res.status(500).json('Server not working')
        }else{
            res.status(200).json(result)
        }
    })
})


router.get('/sdata',verify,(req,res)=>{
    db.query('select * from productdetails',(err,result)=>{
        if(err){
            console.log(err)
            res.status(500).json('Server not working')
        }else{
            res.status(200).json(result)
        }
    })
})
const allproducts = ' SELECT products.*, categories.c_name, brands.b_name,product_images.image_url,product_images.image_url1,product_images.image_url2,product_images.image_url3,product_images.image_url4,product_images.image_url5,product_images.image_url6 FROM products INNER JOIN product_images ON products.id = product_images.product_id INNER JOIN categories ON products.category_id = categories.c_id INNER JOIN brands ON products.brand_id = brands.b_id'
router.get('/newdata',(req,res)=>{
    db.query(allproducts,(error,result)=>{

        if(error){
            res.status(500).json('Server is not working')
        }
        else{
            res.status(200).json(result)
        }
    })
})


 
router.get('/singleproduct/:id',(req,res)=>{
 const id=   req.params.id
    db.query( `SELECT products.*, categories.c_name, brands.b_name,product_images.image_url,product_images.image_url1,product_images.image_url2,product_images.image_url3,product_images.image_url4,product_images.image_url5,product_images.image_url6 FROM products INNER JOIN product_images ON products.id = product_images.product_id INNER JOIN categories ON products.category_id = categories.c_id INNER JOIN brands ON products.brand_id = brands.b_id where products.id=${id}`,(error,result)=>{
        
        if(error){
            res.status(500).json('Server is not working')
        }
        else{
            res.status(200).json(result)
        }
    })
})

module.exports =router;
