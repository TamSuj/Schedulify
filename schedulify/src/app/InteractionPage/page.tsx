"use client";

// src/app/interaction/calendarPage.tsx
import React, { useState } from "react";
import axios from "axios";
import styles from "./page.module.css"; // Import the CSS module

const InteractionPage = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("/api/gemini", { input });
      setResponse(res.data);
    } catch (error) {
      console.error("Error interacting with Gemini API:", error);
      setResponse("An error occurred while interacting with the AI Scheduler.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.interactionBox}>
        <h1 id="title">Interact with AI Scheduler</h1>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter your request"
          className={styles.input}
        />
        <button onClick={handleSubmit} className={styles.button}>
          Submit
        </button>
        <div className={styles.response}>
          <h2>Response:</h2>
          <p className={styles.responseContent}>{response}</p>
        </div>
      </div>
    </div>
  );
};

export default InteractionPage;
