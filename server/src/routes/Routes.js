const express = require("express")
const router = express.Router()
const multer = require("multer")
const { createuser , LogInUser } = require("../controller/usercontroller.js")
const upload = multer({ storage: multer.diskStorage({}), });

router.post('/createUserdata',upload.single("profileImg"), createuser)
router.post('/LogInUser',upload.single(), LogInUser)


router.all('/*', (req, res) => {
    return res.status(404).send({ status: false, msg: "Invalid URL" });
});

module.exports = router