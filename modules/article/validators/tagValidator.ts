import Joi from "joi";

// Schema for tag creation & update
export const tagSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  description: Joi.string().max(255),
});

// Schema for validating ID in params (for DELETE & PUT requests)
export const idParamSchema = Joi.object({
  id: Joi.string().required(), // Ensures ID is provided
});
