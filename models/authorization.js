var mongoose = require('mongoose');

const authorizationSchema = new mongoose.Schema(
  {
    application_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Application",
    },
    token: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const newAuthorization = mongoose.model("Authorization", authorizationSchema);

module.exports = newAuthorization;
