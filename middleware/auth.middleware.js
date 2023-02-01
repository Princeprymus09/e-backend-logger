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
      console.log(req.headers, 'REQ> HEADERS-')
      let token = req.headers.authorisation;
      console.log(token, 'TOKEN ----')
      // let applicationId = req.params.id;
      try {
        // It's not clear which token to use, so using a custom token named "sample-token" for authorisation.
        // let tokenDetails = await authModel.find({ application_id: mongoose.Types.ObjectId(applicationId) })
        // if (!token || !tokenDetails || tokenDetails !== token) {
        if (!token || token !== "sample-token") {
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