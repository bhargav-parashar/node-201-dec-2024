const mongoose = require("mongoose");
var validator = require("validator");

const authorSchema = new mongoose.Schema(
  {
    fullName: { type: String, default: "" },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (v) =>
          validator.isEmail(v, { host_blacklist: ["gmail.com"] }),
        message: (props) => {
          if (props.value.includes("gmail.com"))
            return `${props.value} is not a valid business email. Use a valid business email`;
          return `${props.value} is not a valid email.`;
        },
      },
    },
    twitterHandle: { type: String, default: "" },
    image: {
      type: String,
      default:
        "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar.png",
      validate: {
        validator: (v) => validator.isURL(v, { protocols: ["https"] }),
        message: (props) => `${props.value} is not a valid URL!`,
      },
    },
  },
  {
    _id: false,
  }
);

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true }, //Title is string
    authors: { type: [authorSchema] }, //Authors is an array of strings
    content: { type: String, default: "" }, //Content is string
    publishedAt: { type: Date, default: null }, //publishedAt is Date
  },
  { timestamps: true }
);

const blogModel = mongoose.model("Blog", blogSchema);

module.exports = blogModel;
