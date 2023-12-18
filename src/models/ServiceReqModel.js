const mongoose = require("mongoose");

const ServicerequestModel = new mongoose.Schema(
  {
    user_Id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      default: " ",
    },
   firstname: {
      type: String,
      default: " ",
    },
    lastname: {
      type: String,
      default: " ",
    },
    email: {
      type: String,
      default: " ",
    },
    contactnumber: {
      type: Number,
      default: " ",
    },
    alternatenumber: {
      type: Number,
      default: " ",
    },
    paymentMode: {
      type: String,
      default: "COD",
    },
    servicbrouch: {
      type: String,
      default: " ",
    },

    pickuplocation: {
      locality: { type: String },
      city: { type: String },
      district: { type: String },
      state: { type: String },
      pincode: { type: Number }
    },

    status: {
      type: String,
      default: " ",
    },
  },
  { timestamps: true }
);
const ServiceModel = mongoose.model("Service_Request", ServicerequestModel);
module.exports = ServiceModel;