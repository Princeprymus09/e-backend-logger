import mongoose, { Schema } from "mongoose";

const logsSchema = new mongoose.Schema(
  {
    application_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Application",
    },
    type: {
      type: String,
      enum: ["error", "info", "warning"],
    },

    priority: {
      type: String,
      enum: ["lowest", "low", "medium", "high", "highest"],
    },

    path: {
      type: String,
    },

    message: {
      type: String,
    },

    request: {
      type: Schema.Types.Mixed,
    },
    response: {
      type: Schema.Types.Mixed,
    },
  },
  {
    timestamps: true,
  }
);

const newLogsSchema = mongoose.model("Logs", logsSchema);
module.exports = newLogsSchema;
