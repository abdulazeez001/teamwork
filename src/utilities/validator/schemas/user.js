const Joi = require('joi');

const id = Joi.number().required();
const requiredString = Joi.string().trim().min(1).required();
const string = Joi.string().trim().min(1);
const email = Joi.string().email().required();

exports.createEmployeeSchema = Joi.object({
  first_name: requiredString,
  last_name: requiredString,
  email: email,
  password: Joi.string()
    .trim()
    .regex(new RegExp('^[a-zA-Z0-9]{8,30}$'))
    .required(),
  gender: Joi.string().trim().min(4),
  job_role: string,
  department: string,
  address: string,
});

exports.getUserByEmailSchema = Joi.object({
  email: email,
});

exports.loginUserSchema = Joi.object({
  email: email,
  password: Joi.string()
    .trim()
    .regex(new RegExp('^[a-zA-Z0-9]{8,30}$'))
    .required(),
});
