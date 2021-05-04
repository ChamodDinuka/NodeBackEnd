const express=require('express')
const router = express.Router();
const { getClass,updateClass,postClass,deleteClass} = require('../controllers/maincontrollers')

router.route('/').get(getClass)
router.route('/:id').put(updateClass)
router.route('/').post(postClass)
router.route('/:id').delete(deleteClass)

module.exports =router