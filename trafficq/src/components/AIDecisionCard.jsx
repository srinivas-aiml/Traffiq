import "../styles/AIDecisionCard.css";

import {
  FaTrafficLight,
  FaClock,
  FaChartBar,
  FaRobot,
} from "react-icons/fa";

function AIDecisionCard({ result }) {

  if (!result) return null;

  const trafficColor = {
    Heavy: "#e53935",
    Moderate: "#fb8c00",
    Light: "#43a047",
  };

  return (
    <div className="ai-card">

      <h2>🚦 Traffic Prediction</h2>

      <div className="card-row">
        <div className="label">
          <FaTrafficLight className="icon" />
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

      <div className="card-row">
        <div className="label">
          <FaClock className="icon" />
          <span>Estimated Travel Time</span>
        </div>

        <strong>
          {result.travel_time || "Coming Soon"}
        </strong>
      </div>

      <div className="card-row">
        <div className="label">
          <FaChartBar className="icon" />
          <span>Congestion Score</span>
        </div>

        <strong>
          {result.congestion_score || "--/100"}
        </strong>
      </div>

      <div className="card-row">
        <div className="label">
          <FaRobot className="icon" />
          <span>Prediction Confidence</span>
        </div>

        <strong>
          {result.confidence || "--%"}
        </strong>
      </div>

      <div className="status-box">
        <h3>🧠 AI Status</h3>

        <p>Prediction Generated Successfully</p>
      </div>

    </div>
  );
}

export default AIDecisionCard;