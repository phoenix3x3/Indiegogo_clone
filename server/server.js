const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const users = require("./routes/api/users");
const uri = process.env.MONGODB_URI;
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use("/api/users", require("./routes/api/users"));
app.use("/api/users/auth", require("./routes/api/users"));
app.use("/api/users/registration", require("./routes/api/users"));
app.use("/api/users/login", require("./routes/api/users"));

// app.use("/api/auth", require("./routes/api/auth"));

mongoose
  .connect(uri, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.listen(port, () => console.log(`Server started on port ${port}`));
