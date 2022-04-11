const express = require('express')
const { post_data, getAllpost,getById} = require('../Controller/controller')

const router = express.Router()


router.post('/post', post_data)

router.get('/Allpost', getAllpost)

router.get("/getById/:id",getById)

module.exports = router