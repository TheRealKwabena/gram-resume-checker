import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/SuggestionsPage.css";

const SuggestionsPage = () => {
  const location = useLocation();
  
  const data = location.state?.data;

  if (!data) {
    return <div>No data found.</div>;
  }

  const { suggestions, originalText } = data;

  return (
    <div className="suggestions-page">
      <h1>Suggestions for Your Resume</h1>

      <div className="original-text-container">
        <h2>Original Resume Text:</h2>
        <p>{originalText}</p> 
      </div>

      <div className="suggestions-container">
        <h2>Suggestions:</h2>
        <pre>{suggestions}</pre> 
      </div>
    </div>
  );
};

export default SuggestionsPage;
