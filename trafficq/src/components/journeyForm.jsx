import { useState } from "react";
import PredictionResult from "./PredictionResult";
import AIDecisionCard from "./AIDecisionCard";
import RecommedationCard from "./RecommendationCard";


function JourneyPlanner() {
  const [journey, setJourney] = useState({
    source: "",
    destination: "",
    date: "",
    time: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setJourney({
      ...journey,
      [e.target.name]: e.target.value,
    });
  };

  const predictTraffic = async () => {
    setLoading(true);
    setError("");
    setResult(null);

    try {

    if (
    !journey.source ||
    !journey.destination ||
    !journey.date ||
    !journey.time
) {
    setError("Please fill all fields.");
    return;
}

      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(journey),
      });

      if (!response.ok) {
        throw new Error("Server Error");
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Journey Planner</h2>

      <input
        type="text"
        name="source"
        placeholder="Source"
        value={journey.source}
        onChange={handleChange}
      />

      <input
        type="text"
        name="destination"
        placeholder="Destination"
        value={journey.destination}
        onChange={handleChange}
      />

      <input
        type="date"
        name="date"
        value={journey.date}
        onChange={handleChange}
      />

      <input
        type="time"
        name="time"
        value={journey.time}
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={predictTraffic} disabled={loading}>
        {loading ? "Predicting..." : "Predict Traffic"}
      </button>

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}
      <div className="prediction-container">

     <AIDecisionCard result={result} />
     {
       result &&  <RecommedationCard traffic={result.traffic} />
     }      

      </div>

      
    </div>
  );
}

export default JourneyPlanner;