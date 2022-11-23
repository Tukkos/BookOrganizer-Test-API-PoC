import Joi from 'joi';

export const BookSchema = Joi.object({
    bookTitle: Joi.string().required(),
    pages: Joi.number().required(),
    status: Joi.string()
});