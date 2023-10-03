const express = require('express')

const cricketControllers = require('../controllers/appControllers')

const router = express.Router();

router.get('/get-cricketers/info', cricketControllers.getInfo);

router.post('/post-cricketers/info', cricketControllers.postInfo)

module.exports = router;