import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/SuggestionsPage.css";

const SuggestionsPage = () => {
  const location = useLocation();

  // Extract data passed through navigation
  const data = location.state?.data;

  // Check if data exists
  if (!data) {
    return <div>No data found.</div>;
  }

  // Destructure suggestions and originalText from the data
  const { suggestions, originalText } = data;

  return (
    <div className="suggestions-page">
      <h1>Suggestions for Your Resume</h1>

      {/* Original Resume Text Section */}
      <div className="original-text-container">
        <h2>Original Resume Text:</h2>
        <p>{originalText}</p> {/* Original text displayed as a paragraph */}
      </div>

      {/* Suggestions Section */}
      <div className="suggestions-container">
        <h2>Suggestions:</h2>
        <pre>{suggestions}</pre> {/* Display suggestions with preserved formatting */}
      </div>
    </div>
  );
};

export default SuggestionsPage;
