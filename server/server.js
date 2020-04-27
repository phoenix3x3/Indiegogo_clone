const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const uri = process.env.MONGODB_URI;
const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "client", "build")));

mongoose
  .connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`Server started on port ${port}`));
