var express =require('express');


var customerController = require('../src/customer/customerController');
const router= express.Router();

router.route('/customer/login').post(customerController.loginCustomerControllerFn);
router.route('/customer/create').post(customerController.createCustomerControllerFn);






module.exports = router; 