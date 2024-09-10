const{errorhandling} = require('../Errorhandling/errorhandling.js')
const Usermodel = require('../model/Usermodel.js')

const userModel = require('../model/Usermodel.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const cloudinary = require ('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.cloudname,
    api_key : process.env.APIkey,
    api_secret : process.env.APiSecret
    
});

exports.createuser = async (req, res) => {
    try {
      
        const ImageData = req.file;
        const data = req.body;
         if(data.password==undefined){ return res.status(400).send({ status:false , message:"provide password first!" })
         }

        if(ImageData== undefined) {
            const passbcrypt = await bcrypt.hash(data.password, 5)
            data.password = passbcrypt
            const createdata = await userModel.create(data);
            return res.status(201).send({ status:true , message:"user data created sucessfully!" , data: createdata})
        }
        const result= await cloudinary.uploader.upload(ImageData.path)
        data.profileImg = result.secure_url;

        
        const passbcrypt = await bcrypt.hash(data.password, 5)
        data.password = passbcrypt
        const createdata = await userModel.create(data) 
        return res.status(201).send({ status: true, msg: "suf Created", Data: createdata })
    }
    catch (err) { return  errorhandling(err,res)}

}


exports.getApI = async (req, res) => {
    try {
        const data = await userModel.find()
        return res.send({ Status: true, msg: "Get All the data", Data: data })
    }
    catch (e) {
        return res.status(500).send({ status: false, msg: e.message })
    }
}

exports.LogInUser = async (req, res) => {
    try {
        const data = req.body;
        const {userName , password} = data
        if(!userName){return res.status(400).send({status: false , msg: "plz provide username"})}
        if(!password){return res.status(400).send({status: false , msg: "plz provide password"})}


        const checkMailId = await Usermodel.findOne({userName : userName})
        if(!checkMailId) {return res.status(404).send({status: false , msg: "plz login"})}

                let checkpass = await bcrypt.compare(password.trim(),checkMailId.password)
            if (!checkpass) return res.status(400).send({ Staus: false, msg: "Wrong Password",data:checkpass })
                
                let id = checkMailId._id
                
                let token = jwt.sign({
                    UserId:id,
                    AuthorName:'Tarun'
                },
               process.env.AcessSecretKey,
                {expiresIn:'12h'}
            )

            return res.status(200).send({status:true,token,id})

    }
    catch (err) { return  errorhandling(err,res)}
}


