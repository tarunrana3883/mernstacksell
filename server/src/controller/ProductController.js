const productmodel = require("../model/productModel")
require('dotenv').config()
const cloudinary = require ('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.cloudname,
    api_key : process.env.APIkey,
    api_secret : process.env.APiSecret
    
});


exports.createproduct = async (req, res) => {
    try {
        
        const data = req.body;
        const ImageData = req.file;
        if(ImageData == undefined){ return res.status(400).send({ status:false , msg:"provide Image first!" })
        }
        const result= await cloudinary.uploader.upload(ImageData.path)
        data.ProductImg = result.secure_url;
        
        const productData = await productmodel.create(data);
        return res.status(201).send({ status: true, message: "Product data created sucessfully!", data: productData })


    }
    catch (err) { return res.status(500).send({status:false,msg:err.message}) }

}