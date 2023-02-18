const express = require("express");
const app = express();
const cors = require("cors");
const port = 4000;
const taskRoutes = require("./api/routes/tasks");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.use(express.json());
app.use(cors());
app.use("/api", taskRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
