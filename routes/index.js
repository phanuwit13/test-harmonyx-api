const express = require('express')
const route = express.Router()
const exam2 = require('../controllers/exam2')
const exam3 = require('../controllers/exam3')
const exam1 = require('../controllers/exam1')

module.exports = route

route.get('/exam-2/change-money', exam2.changeMoney(), function (req, res) {
  var response = res.data
  res.status(200).json(response)
})

route.post('/exam-3/calculate-price', exam3.calculatePrice(), function (req, res) {
  var response = res.data
  res.status(200).json(response)
})

route.post('/exam-1/calculate-answer', exam1.calculateAnswer(), function (req, res) {
  var response = res.data
  res.status(200).json(response)
})

