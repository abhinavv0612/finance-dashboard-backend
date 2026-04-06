import Joi from "joi";

export const createUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  role: Joi.string().valid("ADMIN", "ANALYST", "VIEWER").required(),
});

export const createRecordSchema = Joi.object({
  amount: Joi.number().required(),
  type: Joi.string().valid("INCOME", "EXPENSE").required(),
  category: Joi.string().required(),
  date: Joi.date().required(),
  userId: Joi.string().required(),
});