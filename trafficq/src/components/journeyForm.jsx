import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaSpinner,
  FaExclamationTriangle,
  FaCheckCircle,
  FaRobot,
  FaArrowRight,
} from "react-icons/fa";
import AIDecisionCard from "./AIDecisionCard";

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
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setJourney({
      ...journey,
      [e.target.name]: e.target.value,
    });
  };

  const predictTraffic = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");
    setResult(null);

    try {
      if (
        !journey.source.trim() ||
        !journey.destination.trim() ||
        !journey.date ||
        !journey.time
      ) {
        setError("Please complete all journey fields before predicting traffic.");
        return;
      }

      if (
        journey.source.trim().toLowerCase() === journey.destination.trim().toLowerCase()
      ) {
        setError("Source and destination cannot be the same. Please enter different locations.");
        return;
      }

      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          source: journey.source.trim(),
          destination: journey.destination.trim(),
          date: journey.date,
          time: journey.time,
        }),
      });

      if (!response.ok) {
        throw new Error("The prediction service is currently unavailable. Please try again.");
      }

      const data = await response.json();
      setResult(data);
      setSuccessMessage("Prediction generated successfully. Your traffic guidance is ready.");
    } catch (err) {
      setError(err.message || "Something went wrong while predicting traffic.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="planner-section" id="planner">
      <div className="planner-shell">
        <div className="planner-header">
          <span className="planner-badge">
            <FaRobot /> AI Journey Planner
          </span>
          <h2>Predict traffic before you leave</h2>
          <p>
            Enter your trip details and get a faster, clearer congestion forecast with
            practical departure guidance.
          </p>
        </div>

        <div className="planner-grid">
          <form className="planner-card" onSubmit={predictTraffic}>
            <div className="field-group">
              <label htmlFor="source">
                <FaMapMarkerAlt /> Source
              </label>
              <input
                id="source"
                type="text"
                name="source"
                placeholder="e.g. Ecity"
                value={journey.source}
                onChange={handleChange}
              />
            </div>

            <div className="field-group">
              <label htmlFor="destination">
                <FaMapMarkerAlt /> Destination
              </label>
              <input
                id="destination"
                type="text"
                name="destination"
                placeholder="e.g. Bellandur"
                value={journey.destination}
                onChange={handleChange}
              />
            </div>

            <div className="field-grid">
              <div className="field-group">
                <label htmlFor="date">
                  <FaCalendarAlt /> Date
                </label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  value={journey.date}
                  onChange={handleChange}
                />
              </div>

              <div className="field-group">
                <label htmlFor="time">
                  <FaClock /> Time
                </label>
                <input
                  id="time"
                  type="time"
                  name="time"
                  value={journey.time}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button className="predict-btn" type="submit" disabled={loading}>
              {loading ? (
                <>
                  <FaSpinner className="btn-spinner" /> Predicting...
                </>
              ) : (
                <>
                  <FaArrowRight /> Predict Traffic
                </>
              )}
            </button>

            {error && (
              <div className="feedback error-message">
                <FaExclamationTriangle /> {error}
              </div>
            )}

            {successMessage && (
              <div className="feedback success-message">
                <FaCheckCircle /> {successMessage}
              </div>
            )}
          </form>

          <div className="result-column">
            <AIDecisionCard result={result} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default JourneyPlanner;