import Joi from 'joi'

export const createPersonValidator = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  address: Joi.string().required(),
}).strict()


export const updatePersonValidator = Joi.object({
  name:Joi.string().optional(),
  age:Joi.number().optional(),
  address: Joi.string().optional()
}).strict()
