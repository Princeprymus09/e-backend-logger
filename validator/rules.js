var Joi = require('@hapi/joi');

module.exports = {
  postApi: {
    body: Joi.object().keys({
      token: Joi.string().required().label('User Token'),
      priority: Joi.string().required().label('Priority'),
      name: Joi.string().label('Name'),
      path: Joi.string().label('Path'),
      type: Joi.string().label('Type'),
      message: Joi.string().label('Message'),
      request: Joi.any().label('Request'),
      response: Joi.any().label('Response')
    })
  },
  deleteApi: {
    body: Joi.object().keys({
      id: Joi.string().required().label('User ID')
    })
  }
};