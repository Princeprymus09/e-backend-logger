var mongoose = require('mongoose');

/*
 +++++++++++++++++
 +     Model     +
 +++++++++++++++++
*/
const authModel = require('../models/authorization');

let authMiddleware = (function () {
  function authenticateUser () {
    return async (req, res, next) => {
      let token = req.headers.Authorisation;
      let applicationId = req.params.id;
      try {
        let tokenDetails = await authModel.find({ application_id: mongoose.Types.ObjectId(applicationId) })
        if (!token || !tokenDetails || tokenDetails !== token) {
          throw new Error;
        }
        next();
      } catch (err) {
        res.status(401).json({ 'status': 'Error', 'message': 'Authorization Failed!' });
      }
    };
  }

  return {
    authenticateUser: authenticateUser 
  };
})();

module.exports = authMiddleware;