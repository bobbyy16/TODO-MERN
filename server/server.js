const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
            <html>
              <head><title>Success!</title></head>
              <body>
                <h1>You did it!</h1>
                <img src="https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif" alt="Cool kid doing thumbs up" />
              </body>
            </html>
          `);
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App is listening at port http://localhost:${PORT}`);
});
