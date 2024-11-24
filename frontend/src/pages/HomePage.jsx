import React, { useState } from "react";
import "../styles/HomePage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [resume, setResume] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  const sampleData = {
    message: "Your resume is a great match for this job.",
    suggestions: "Consider adding more skills in Python.",
    matchpercentage: 85, 
    originalText: "Original Resume file."
  };

  const handleResumeUpload = (e) => {
    setResume(e.target.files[0]);
  };

  const handleUploadClick = () => {
    if (resume) {
      setIsUploading(true);
      setTimeout(() => {
        navigate("/results", { state: { data: sampleData } });
        setIsUploading(false);
      }, 2000);
    }
  };

  return (
    <div className="homepage">
      <h1>ResChecker</h1>
      <p>Welcome to ResChecker! A tool that helps you review and improve your resume to increase your chances of landing the perfect job.</p>
      

      <p>Ready to get started? Upload your resume below, and let us help you get one step closer to your dream job!</p>
      
      <input type="file" accept=".pdf" onChange={handleResumeUpload} />
      <button onClick={handleUploadClick} disabled={!resume}>
        Upload Resume
      </button>

      {isUploading && (
        <div className="upload-popup">
          <div className="popup-content">
            <p>Uploading your resume...</p>
            <div className="spinner"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
