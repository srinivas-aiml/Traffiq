import { useState } from "react";

function JourneyPlanner() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const journey = {
      source,
      destination,
      date,
      time,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/journey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(journey),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
      alert("Unable to connect to the FastAPI server.");
    }
  };

  return (
    <section id="planner" className="planner-section">
      <div className="planner-card">
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

          <button type="submit" className="predict-btn">
            🚦 Predict Traffic
          </button>
        </form>

        {result && (
          <div className="result-card">
            <h3>Prediction Result</h3>

            <p><strong>Traffic:</strong> {result.traffic}</p>

            <p><strong>Estimated Time:</strong> {result.estimated_time}</p>

            <p>
              <strong>Suggested Departure:</strong>{" "}
              {result.suggested_departure}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default JourneyPlanner;