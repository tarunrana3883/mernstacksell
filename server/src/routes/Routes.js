const express = require("express")
const router = express.Router()
const multer = require("multer")
const { createuser , LogInUser , getApI , updateApi, deleteApi} = require("../controller/usercontroller.js")
const upload = multer({ storage: multer.diskStorage({}), });
const {authenticate ,Authorisation} = require("../middleware/userauth.js")


router.post('/createUserdata',upload.single("profileImg"), createuser)
router.post('/LogInUser',upload.single(), LogInUser)
router.get('/getalluserdata', authenticate  , getApI)
router.put('/updateApi/:userid',upload.single() , authenticate , Authorisation, updateApi)
router.delete('/deleteApi/:userid', authenticate , Authorisation,deleteApi)


router.all('/*', (req, res) => {
    return res.status(404).send({ status: false, msg: "Invalid URL" });
});

module.exports = router