const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateSummary(data) {

  const model = genAI.getGenerativeModel({
    model: "gemini-flash-lite-latest"
  });

  const prompt = `
Analyze the following sales data and produce a short executive summary.

Sales Data:
${JSON.stringify(data)}

Provide insights about:
- top selling category
- highest revenue region
- overall sales trends
`;

  try {

    const result = await model.generateContent(prompt);

    const text = result.response.text();

    return text;

  } catch (error) {

    console.error("Gemini Error:", error.message);
    throw new Error("AI summary generation failed");
  }
}

module.exports = generateSummary;