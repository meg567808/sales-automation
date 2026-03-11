const express = require("express");
const multer = require("multer");
const path = require("path");
const parseCSV = require("../services/csvParser");
const generateSummary = require("../services/aiSummary");
const sendEmail = require("../services/emailService");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.post("/upload", upload.single("file"), async (req, res) => {
  try {

    const filePath = req.file.path;
    const recipient = req.body.email;

    const data = await parseCSV(filePath);

    const summary = await generateSummary(data);

    await sendEmail(recipient, summary);

    res.json({
      message: "AI summary generated and email sent",
      rows: data.length
    });

  } catch (error) {
    console.error("UPLOAD ERROR:", error.message);
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;