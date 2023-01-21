var Joi = require('joi');

module.exports = {
  postApi: {
    body: Joi.object().keys({
      token: Joi.string().required().label('User Token'),
      priority: Joi.string().required().label('Priority'),
      path: Joi.string().required().label('String')
    })
  },
  deleteApi: {
    body: Joi.object().keys({
      token: Joi.string().required().label('User Token')
    })
  }
};