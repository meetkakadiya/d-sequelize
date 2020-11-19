const express = require('express')

const router = express.Router()

const addData = require('../controller/artical.controller')

const userData = require('../controller/user.controller')

router.post('/add', addData.addArtical)

router.get('/all', addData.allData)

router.get('/findone/:id', addData.findone)

router.post('/update/:id', addData.update)

router.post('/remove/:id', addData.remove)

router.get('/find', addData.findquery)

router.get('/findAndadd', addData.findorcreate)
router.post('/data', addData.data) // unmanaged transaction
router.post('/managedata', addData.managedata) // manag transaction

router.post('/exam', userData.addNewTable)

router.post('/adduser', userData.addUser)
router.post('/addpost', userData.addPost)
router.post('/addcomment', userData.addComments)
router.get('/alldata', userData.allData)

router.get('/post', userData.postData)
router.get('/findjoin/:name', userData.findInJoin);

router.post('/alias', userData.associationAlias)


module.exports = router