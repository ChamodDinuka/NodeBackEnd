const express=require('express')
const router = express.Router();
const { getClass,updateClass} = require('../controllers/maincontrollers')

router.route('/').get(getClass)
router.route('/:id').put(updateClass)

module.exports =router