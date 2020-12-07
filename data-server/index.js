const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

category = require("./categoryroute");
expense = require("./expenseroute");


mongoose
  .connect(
    "mongodb+srv://user:1234@cluster0.gf86e.mongodb.net/feedback?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("[INFO] Connected to database."))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.use("/api/category", category);
app.use("/api/expense", expense);

const PORT = 3000;

app.listen(PORT, console.log(`[INFO] Listening at ${PORT}`));
