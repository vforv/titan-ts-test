import * as Joi from 'joi';
import * as j2s from 'joi-to-swagger';

const createValidator = Joi.object().keys({
    example: Joi.string().required(),
}).required();

const updateValidator = Joi.object().keys({
    example: Joi.string().required(),
    id: Joi.string().required(),
}).required();

const readValidator = Joi.object().keys({
    from: Joi.number().required(),
    size: Joi.number().required(),
}).required();

const idValidator = Joi.object().keys({
    id: Joi.string().required(),
}).required();

export const PING_CREATE_VALIDATOR = {
    schema: {
        body: j2s(createValidator).swagger,
    },
};

export const PING_UPDATE_VALIDATOR = {
    schema: {
        body: j2s(updateValidator).swagger,
    },
};

export const PING_READ_VALIDATOR = {
    schema: {
        params: j2s(readValidator).swagger,
    },
};

export const PING_ID_VALIDATOR = {
    schema: {
        params: j2s(idValidator).swagger,
    },
};
