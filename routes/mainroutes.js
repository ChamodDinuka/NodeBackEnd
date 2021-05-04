const express=require('express')
const router = express.Router();
const { getClass,updateClass,postClass} = require('../controllers/maincontrollers')

router.route('/').get(getClass)
router.route('/:id').put(updateClass)
router.route('/').post(postClass)

module.exports =router