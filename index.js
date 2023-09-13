const axios = require("axios");
//const dotenv = require("dotenv");
const express = require("express");
const config = require("./dotenv");

// my routes
const webhook_routes = require("./routes/webhooks");

const app = express();
//dotenv.config();

const CLUP_API = config.CLUP_API;
const SPACE_ID = config.SPACE_ID;

const headers = {
  Authorization: CLUP_API,
};

const apiUrl = `https://api.clickup.com/api/v2/space/${SPACE_ID}/task`;

const PORT = config.PORT || 5000; // Set the port

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Hello To Clickup API");
});
app.use("/webhooks", webhook_routes);

// axios
//   .get(apiUrl, { headers })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
