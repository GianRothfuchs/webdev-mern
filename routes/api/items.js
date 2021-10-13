const express = require('express')
const router = express.Router()

// Get Item Model
const Item = require('../../models/Item')

// @route  GET api/items
// @desc   Get All Items
// @access Public
// '/' is used as the input comes with api/items
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items))
})

// @route  POST api/items
// @desc   Create A Post
// @access Public
// '/' is used as the input comes with api/items
router.post('/', (req, res) => {
  const newItem = new Item({
    // here all elments are mentioned that are defined in models\Item.js, and that do not have a default
    name: req.body.name,
  })
  newItem.save().then((item) => res.json(item))
})

module.exports = router
