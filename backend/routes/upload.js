const express = require("express");
const multer = require("multer");
const parseCSV = require("../services/csvParser");
const generateSummary = require("../services/aiSummary");
const sendEmail = require("../services/emailService");

const router = express.Router();

/* Use memory storage for Render deployment */
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }
});

/* Upload endpoint */
router.post("/upload", upload.single("file"), async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const email = req.body.email;

    /* Parse CSV directly from buffer */
    const data = await parseCSV(req.file.buffer);

    /* Generate AI summary */
    const summary = await generateSummary(data);

    /* Send email */
    await sendEmail(email, summary);

    res.json({
      message: "AI summary generated and email sent",
      rows: data.length
    });

  } catch (error) {
    console.error("UPLOAD ERROR:", error);
    res.status(500).json({ error: "Error processing file" });
  }
});

module.exports = router;