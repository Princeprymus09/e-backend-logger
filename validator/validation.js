const Joi = require('joi');

module.exports = options => {
  return (req, res, next) => {
    let result = null;

    if (options.header) {
      result = Joi.validate(req.header, options.header);
    }

    // if no error only then check further
    if (!result && options.body) {
      result = Joi.validate(req.body, options.body);
    }

    // if no error only then check further
    if (!result && options.params) {
      result = Joi.validate(req.params, options.params);
    }

    if (result.error === null) {
      return next();
    }

    res.statusCode = 400;
    res.send({
      success: false,
      message: 'Invalid data',
      error: result.error.details.map(err => {
        logger.error(err);
        return err.message;
      })
    });
  };
};