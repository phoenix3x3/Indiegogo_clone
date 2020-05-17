const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const loginRouter = require("./routes/api/login");
const registrationRouter = require("./routes/api/registration");
const authorizateRouter = require("./routes/api/authorizate");
const uri = process.env.MONGODB_URI;
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(uri, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));
//
app.use("/api/registration", registrationRouter);
app.use("/api/login", loginRouter);
app.use("/api/authorizate", authorizateRouter);
//
app.use(express.static(path.join(__dirname, "..", "client", "build")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

// app.listen(port, () => console.log(`Server started on port ${port}`));
var server = app.listen(process.env.PORT || 5000, function () {
  var port = server.address().port;
  console.log("Express is working on port " + port);
});
