const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3001;
const taskRoutes = require("./api/routes/tasks");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/api", taskRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
