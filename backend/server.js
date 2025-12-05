require("dotenv").config();
const express = require("express");
const cors = require("cors");

const formRoute = require("./routes/formRoute");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/submit", formRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
