const express = require('express')
const Register = require('./Attentication')
const Product = require('./Products')
const cors = require('cors')


const app = express()
app.use(cors())
app.use(express.json())

app.use('/user',Register)
app.use('/products',Product)





app.listen(5000,()=>{
    console.log('node application is running at port number 5000')
})