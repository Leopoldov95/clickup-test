const express = require("express");
const router = express.Router();
const config = require("../dotenv");

router.get("/", async (req, res) => {
  //   console.log("Hello from Webhook GET");
  //   res.json({ message: "Hi from webhooks" });
  const teamId = config.SPACE_ID;
  const resp = await fetch(
    `https://api.clickup.com/api/v2/team/${teamId}/webhook`,
    {
      method: "GET",
      headers: {
        Authorization: config.CLUP_API,
      },
    }
  );
  const data = await resp.text();
  res.json(data);
});

module.exports = router;
