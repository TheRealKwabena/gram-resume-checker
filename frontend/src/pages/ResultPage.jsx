import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"; 

import "../styles/ResultsPage.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state?.data;

  if (!data) {
    return <div>No Data Found</div>;
  }

  const { matchpercentage, message, suggestions, originalText } = data;

  let percentageColor;
  let gradeMessage;
  if (matchpercentage < 50) {
    percentageColor = "red";
    gradeMessage = "Your resume failed.";
  } else if (matchpercentage < 80) {
    percentageColor = "yellow";
    gradeMessage = "Your resume is average.";
  } else {
    percentageColor = "green";
    gradeMessage = "Your resume passed!";
  }

  const chartData = {
    labels: ["Match Percentage", "Remaining"],
    datasets: [
      {
        label: "Match Percentage",
        data: [matchpercentage, 100 - matchpercentage],
        backgroundColor: [percentageColor, "lightgray"],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw}%`,
        },
      },
    },
  };

  const handleDetailedSuggestionsClick = () => {
    navigate("/suggestions", { state: { data: { suggestions, originalText } } });
  };

  return (
    <div className="results-page">
      <h1>Results</h1>
      <p>{message}</p>

      <div className="chart-container">
        <Pie data={chartData} options={chartOptions} />
      </div>

      <div
        className="percentage-display"
        style={{ color: percentageColor, textAlign: "center", fontSize: "24px", marginTop: "20px" }}
      >
        <strong>{matchpercentage}%</strong>
      </div>

      <div
        className="grade-message"
        style={{ textAlign: "center", fontSize: "24px", color: "black", fontFamily: "sans-serif", marginTop: "20px" }}
      >
        <h2>{gradeMessage}</h2>
      </div>

      <div className="detailed-suggestions-button">
        <button onClick={handleDetailedSuggestionsClick}>
          Detailed Suggestions
        </button>
      </div>
    </div>
  );
};

export default ResultsPage;
