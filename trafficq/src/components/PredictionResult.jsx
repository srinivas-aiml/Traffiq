import "./PredictionResult.css";

function PredictionResult({ result }) {
  if (!result) return null;

  return (
    <div className="prediction-card">
      <h2>Prediction Result</h2>

      <div className="result-item">
        <span>🚦 Traffic Level</span>
        <strong>{result.traffic || "Not Available"}</strong>
      </div>

      <div className="result-item">
        <span>⏱ Estimated Travel Time</span>
        <strong>{result.travel_time || "Coming Soon"}</strong>
      </div>

      <div className="result-item">
        <span>📊 Congestion Score</span>
        <strong>{result.congestion_score || "--"}</strong>
      </div>

      <div className="result-item">
        <span>🧠 AI Status</span>
        <strong>Prediction Generated Successfully</strong>
      </div>
    </div>
  );
}

export default PredictionResult;