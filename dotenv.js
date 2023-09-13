const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  CLUP_API: process.env.CLUP_API,
  SPACE_ID: process.env.SPACE_ID,
  PORT: process.env.PORT,
};
