import React, { useState } from "react";
import axios from "axios";

function App() {

  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage("Please select a CSV file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("email", email);

    try {

      const response = await axios.post(
        "https://sales-automation.onrender.com/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      setMessage(response.data.message);

    } catch (error) {

      console.error(error);
      setMessage("Upload failed. Check backend.");

    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Sales Insight Automator</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="file"
          accept=".csv"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Upload & Generate Insights
        </button>

      </form>

      <p>{message}</p>

    </div>
  );
}

export default App;