const axios = require("axios");
require("dotenv").config();

async function listModels() {
  try {
    const response = await axios.get(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`
    );

    console.log("Available Models:");
    response.data.models.forEach((m) => {
      console.log(m.name);
    });

  } catch (error) {
    console.error(error.response?.data || error.message);
  }
}

listModels();