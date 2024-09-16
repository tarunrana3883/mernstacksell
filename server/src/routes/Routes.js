const express = require("express")
const router = express.Router()
const multer = require("multer")
const { createuser , LogInUser  , updateApi, } = require("../controller/usercontroller.js")
const {creatadmin , getApI, Loginadmin} = require("../controller/admincontroller.js")
const upload = multer({ storage: multer.diskStorage({}), });
const {authenticate ,Authorisation} = require("../middleware/userauth.js")
const {adminAuthenticate, adminAuthorisation} = require("../middleware/adminauth.js")

// users apis
router.post('/createUserdata',upload.single("profileImg"), createuser)
router.post('/LogInUser',upload.single(), LogInUser)
router.put('/updateApi/:userid',upload.single() , authenticate , Authorisation, updateApi)


// admin apis
// router.post('/creatadmin',upload.single(), creatadmin)
router.get('/getalluserdata', adminAuthenticate  , getApI)
router.post('/Loginadmin',upload.single(), Loginadmin)

router.all('/*', (req, res) => {
    return res.status(404).send({ status: false, msg: "Invalid URL" });
});

module.exports = router