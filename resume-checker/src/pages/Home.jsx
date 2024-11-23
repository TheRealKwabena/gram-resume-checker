import React, { useState } from 'react';
import "../styles/HomePage.css"

function HomePage() {
  const [resume, setResume] = useState(null);

  const handleResumeUpload = (e) => {
    setResume(e.target.files[0]);
  };

  const handleUploadClick = () => {
    // Handle file upload (send to backend)
  };

  return (
    <div className="homepage">
      <h1>Resume Scanner</h1>
      <p>Upload your resume to see how well it matches the job description!</p>
      <input type="file" onChange={handleResumeUpload} />
      <button onClick={handleUploadClick} disabled={!resume}>Upload Resume</button>
    </div>
  );
}

export default HomePage;

