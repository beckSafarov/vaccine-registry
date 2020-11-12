const express = require('express'),
    User = require('../modules/user');

//@desc      Open the home page
//@route     GET /
//@access    Public
exports.indexPage = (req, res, next) => {
    res.render('index'); 
  };

//@desc      Register/make an appointment for vaccine
//@route     GET /register 
//@access    Public
exports.register = (req, res, next) => {
    res.render('register'); 
  };

//@desc      FAQ page
//@route     GET /faq 
//@access    Public
exports.faq = (req, res, next) => {
  res.render('faq'); 
};


//@desc      create/sign-up a new user, 
//@route     POST /signup 
//@access    Public
exports.createNewUser = async(req, res, next) => {
  const newUser = await User.create(req.body);
  console.log(req.body);
  res.status(201).json({
    success: true,
    data: newUser,
  });
};

//@desc      login
//@route     GET /admin
//@access    Public
exports.adminLoginPage = (req, res, next) => {
    res.render('adminLogin'); 
 };

//@desc      login credentials 
//@route     POST /admin
//@access    Public
exports.adminLogin = (req, res, next) => {
  res.json({success: true, msg: 'You have done it'});
};

//@desc      admin dashboard
//@route     GET /admin/dashboard
//@access    Public
exports.adminDashboard = (req, res, next) => {
  res.render('adminDashboard'); 
};


 

