const express = require('express'),
    router = express.Router(),
    {
      payPage,
      payPalPayment,
      successPage,
      errorPage
    } = require('../controllers/paymentController.js');
  

router.route('/').get(payPage).post(payPalPayment); 
router.route('/success').get(successPage); 
router.route('/error').get(errorPage); 


module.exports = router; 