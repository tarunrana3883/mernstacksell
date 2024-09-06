const express = require("express")
const router = express.Router()
const {createuser} = require("../controller/usercontroller.js")

router.get('/test' , (req,res)=>{
    return res.send('tarun')
})



module.exports = router