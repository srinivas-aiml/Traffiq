import { useState } from "react";


function JourneyPlanner() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8001/journey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          source,
          destination,
          date,
          time,
        }),
      });

      const data = await response.json();
      setPrediction(data);
    } catch (error) {
      console.error("Error:", error);
      alert("Unable to connect to the FastAPI server.");
    }
  };

  return (
    <div className="planner-container">
      <h2>Journey Planner</h2>

      <form onSubmit={handleSubmit}>
        <label>📍 Source</label>
        <input
          type="text"
          placeholder="Enter source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
        />

        <label>📍 Destination</label>
        <input
          type="text"
          placeholder="Enter destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />

        <label>📅 Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <label>🕒 Time</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />

        <button type="submit">Predict Traffic</button>
      </form>

      {prediction && (
        <div className="result">
          <h3>Traffic Prediction</h3>

          <p><strong>Traffic:</strong> {prediction.traffic}</p>

          <p>
            <strong>Estimated Time:</strong>{" "}
            {prediction.estimated_time}
          </p>

          <p>{prediction.message}</p>
        </div>
      )}
    </div>
  );
}

export default JourneyPlanner;