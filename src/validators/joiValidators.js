import Joi from 'joi'

export const createPersonValidator = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().optional(),
}).strict()


export const updatePersonValidator = Joi.object({
  name:Joi.string().optional(),
  address: Joi.string().optional()
}).strict()
