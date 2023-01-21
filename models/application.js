var mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const newApplication = mongoose.model("Application", applicationSchema);

module.exports = newApplication;
