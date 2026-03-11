require("dotenv").config();

const express = require("express");
const cors = require("cors");
const uploadRoute = require("./routes/upload");
const { swaggerUi, specs } = require("./swagger");

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.use("/api", uploadRoute);

const PORT = process.env.PORT || 5000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});