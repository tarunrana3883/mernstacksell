const express = require("express")
const router = express.Router()
const multer = require("multer")
const { createuser ,OtpVerification, LogInUser  , updateApi, } = require("../controller/usercontroller.js")
const {creatadmin , getApI, Loginadmin, deleteuserapi} = require("../controller/admincontroller.js")
const {Createshopkeeper , Loginshopkeeper} = require("../controller/Shopkeepercontoller.js")
const upload = multer({ storage: multer.diskStorage({}), });
const {authenticate ,Authorisation} = require("../middleware/userauth.js")
const {adminAuthenticate, adminAuthorisation} = require("../middleware/adminauth.js")
const {ShopkeepAuthenticate,ShopkeepAuthorisation} = require("../middleware/shopkeeperauth.js")
const {createproduct} = require('../controller/ProductController.js')
const {Validation} = require('../middleware/AllUserValidation.js')

// users apis
router.post('/createuser',upload.single("profileImg"),Validation, createuser)
router.post('/OtpVerification/:userId',upload.single(), OtpVerification)
router.post('/LogInUser',upload.single(), LogInUser)
router.put('/updateApi/:userid',upload.single() , authenticate , Authorisation, updateApi)


// admin apis
router.post('/creatadmin',upload.single(), creatadmin)
router.get('/getalluserdata', adminAuthenticate  , getApI)
router.post('/Loginadmin',upload.single(), Loginadmin)

// Shopkeeper apis
router.post('/Createshopkeeper', upload.single() , Createshopkeeper)
router.post('/Shopkeeperlogin',upload.single(),Loginshopkeeper)
router.delete('/deleteUserApi/:userid',adminAuthenticate,adminAuthorisation,deleteuserapi)

// Product Api's
router.post('/createproduct',upload.single('ProductImg'),createproduct)

router.all('/*', (req, res) => {
    return res.status(404).send({ status: false, msg: "Invalid URL" });
});

module.exports = router