import Joi from "joi";

export const bookValidation = Joi.object({
  title: Joi.string().min(3).required(),
  author: Joi.string().min(3).required(),
  img: Joi.string(),
  description: Joi.string().min(6).required(),
  rating: Joi.number().required(),
});
