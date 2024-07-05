import express from 'express';
import Joi from 'joi';
import validator from 'express-joi-validation'
import { userLogin, userSignUp } from '../controllers/userController.js';
import { handleAll } from '../services/common.js';


const router = express.Router();

const valid = validator.createValidator({});

const loginSchema = Joi.object({
  email:Joi.string().email().required(),
  password:Joi.string().max(15).min(0).required(),
});

const signupSchema = Joi.object({
  email:Joi.string().email().required(),
  password:Joi.string().max(15).min(0).required(),
  username:Joi.string().required()
})




router.route('/')
.get()
router.route('/login')
.post(valid.body(loginSchema),userLogin).all(handleAll)
router.route('/signup')
.post(valid.body(signupSchema),userSignUp).all(handleAll)


export default router;














// import express from "express";
// import validator from 'express-joi-validation'
// import Joi from "joi";

// import { handleAll } from "../services/common.js";
// import {  userLogin, userSignUp } from "../controllers/userController.js";


// const router = express.Router();
// const valid = validator.createValidator({});

// const loginSchema = Joi.object({
//   email:Joi.string().email().required(),
//   password:Joi.string().max(14).min(8).required()

// })

// const userSchema = Joi.object({
//   email:Joi.string().email().required(),
//   password:Joi.string().max(14).min(8).required(),
//   username:Joi.string().required()

// });



// router.route('/')
// .get(userLogin).all(handleAll);
// router.route('/login')
// .post(valid.body(loginSchema),userLogin).all(handleAll);
// router.route('/signup')
// .post(valid.body(userSchema),userSignUp).all(handleAll);


// export default router;
