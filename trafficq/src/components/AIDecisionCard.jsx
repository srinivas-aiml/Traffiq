import "../styles/AIDecisionCard.css";

import {
  FaTrafficLight,
  FaClock,
  FaChartBar,
  FaRobot,
  FaLightbulb,
  FaBrain,
} from "react-icons/fa";

function AIDecisionCard({ result }) {
  if (!result) return null;

  const trafficColor = {
    Heavy: "#e53935",
    Moderate: "#fb8c00",
    Light: "#43a047",
  };

  const trafficLevel = result.traffic || "Heavy";
  const travelTime = result.travel_time || "52 minutes";
  const congestionScore = result.congestion_score || "82/100";
  const confidence = result.confidence || "High";

  let recommendation = "Leave 20 minutes earlier.";

  if (trafficLevel === "Moderate") {
    recommendation = "Leave 10 minutes earlier.";
  } else if (trafficLevel === "Light") {
    recommendation = "You can leave at your planned time.";
  }

  const explanationPoints = [
    "Peak hour",
    "Historical congestion",
    "Weekday traffic",
  ];

  return (
    <div className="ai-card">
      <div className="ai-title-row">
        <h2>🚦 AI Traffic Prediction</h2>
        <span className="badge-pill">Live estimate</span>
      </div>

      <div className="ai-stats-grid">
        <div className="card-row">
          <div className="label">
            <FaTrafficLight className="icon" />
            <span>Traffic Level</span>
          </div>

          <strong style={{ color: trafficColor[trafficLevel] || "#0f172a" }}>
            {trafficLevel}
          </strong>
        </div>

        <div className="card-row">
          <div className="label">
            <FaClock className="icon" />
            <span>Estimated Travel Time</span>
          </div>

          <strong>{travelTime}</strong>
        </div>

        <div className="card-row">
          <div className="label">
            <FaChartBar className="icon" />
            <span>Congestion Score</span>
          </div>

          <strong>{congestionScore}</strong>
        </div>

        <div className="card-row">
          <div className="label">
            <FaRobot className="icon" />
            <span>Prediction Confidence</span>
          </div>

          <strong>{confidence}</strong>
        </div>
      </div>

      <div className="insight-box">
        <h3>
          <FaLightbulb /> Recommendation
        </h3>
        <p>{recommendation}</p>
      </div>

      <div className="insight-box explanation-box">
        <h3>
          <FaBrain /> Explanation
        </h3>
        <p>Prediction influenced mainly by:</p>
        <ul>
          {explanationPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AIDecisionCard;