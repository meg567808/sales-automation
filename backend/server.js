require("dotenv").config();

const express = require("express");
const cors = require("cors");

const uploadRoute = require("./routes/upload");
const { swaggerUi, specs } = require("./swagger");

const app = express();

app.use(cors());
app.use(express.json());

/* Swagger docs */
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

/* API routes */
app.use("/api", uploadRoute);

/* Root test route */
app.get("/", (req, res) => {
  res.send("Sales Insight Automator API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});