import "../styles/PredictionResult.css";

import {
  FaTrafficLight,
  FaClock,
  FaChartBar,
  FaRobot,
  FaLightbulb,
  FaBrain,
} from "react-icons/fa";

function PredictionResult({ result }) {
  if (!result) return null;

  const trafficColor = {
    Heavy: "#e53935",
    Moderate: "#fb8c00",
    Light: "#43a047",
  };

  let recommendation = "";

  switch (result.traffic) {
    case "Heavy":
      recommendation =
        "Heavy traffic is expected. Leave 20 minutes earlier to avoid delays.";
      break;

    case "Moderate":
      recommendation =
        "Moderate traffic is expected. Leaving 10 minutes earlier is recommended.";
      break;

    case "Light":
      recommendation =
        "Traffic is light. You can leave at your planned departure time.";
      break;

    default:
      recommendation = "Recommendation not available.";
  }

  return (
    <div className="prediction-card">

      <h2>🚦 AI Traffic Dashboard</h2>

      <div className="result-item">
        <div className="label">
          <FaTrafficLight className="icon"/>
          <span>Traffic Level</span>
        </div>

        <strong
          style={{
            color: trafficColor[result.traffic] || "#000",
          }}
        >
          {result.traffic || "Not Available"}
        </strong>
      </div>

      <div className="result-item">
        <div className="label">
          <FaClock className="icon"/>
          <span>Estimated Travel Time</span>
        </div>

        <strong>{result.travel_time || "Coming Soon"}</strong>
      </div>

      <div className="result-item">
        <div className="label">
          <FaChartBar className="icon"/>
          <span>Congestion Score</span>
        </div>

        <strong>{result.congestion_score || "-- / 100"}</strong>
      </div>

      <div className="result-item">
        <div className="label">
          <FaRobot className="icon"/>
          <span>Prediction Confidence</span>
        </div>

        <strong>{result.confidence || "--%"}</strong>
      </div>

      <div className="status-box">

        <h3>
          <FaLightbulb /> Smart Departure Recommendation
        </h3>

        <p>{recommendation}</p>

      </div>

      <div className="xai-box">

        <h3>
          <FaBrain /> Why this prediction?
        </h3>

        <ul>

          <li>🕒 Peak Office Hour</li>

          <li>🚗 High Historical Traffic Volume</li>

          <li>📅 Weekday Traffic Pattern</li>

          <li>🌦 Weather Conditions</li>

        </ul>

        <p className="note">
          *Future Version:* This section will display the most influential
          features from the Random Forest model using Explainable AI (Feature Importance).
        </p>

      </div>

      <div className="status-success">

        <h3>🧠 AI Status</h3>

        <p>Prediction Generated Successfully</p>

      </div>

    </div>
  );
}

export default PredictionResult;