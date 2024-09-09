const express = require("express")
const router = express.Router()
const multer = require("multer")
const { createuser } = require("../controller/usercontroller.js")
const upload = multer({ storage: multer.diskStorage({}), });

router.post('/createUserdata',upload.single("profileImg"), createuser)


router.all('/*', (req, res) => {
    return res.status(404).send({ status: false, msg: "Invalid URL" });
});

module.exports = router