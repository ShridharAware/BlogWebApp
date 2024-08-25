require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("./routes");

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI);

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server is live on http://localhost:${PORT}`);
});
