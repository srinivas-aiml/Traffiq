import "./RecommendationCard.css";

function RecommendationCard({ traffic }) {

  let title = "";
  let message = "";

  if (traffic === "Heavy") {
    title = "Heavy traffic is expected.";
    message = "Leaving 20 minutes earlier may reduce your travel time.";
  } 
  else if (traffic === "Moderate") {
    title = "Moderate traffic is expected.";
    message = "Leaving 10 minutes earlier is recommended.";
  } 
  else if (traffic === "Light") {
    title = "Traffic is light.";
    message = "You can leave at your planned departure time.";
  } 
  else {
    title = "Traffic information unavailable.";
    message = "No recommendation available.";
  }

  return (
    <div className="recommendation-card">
      <h2>💡 AI Recommendation</h2>

      <h3>{title}</h3>

      <p>{message}</p>

    </div>
  );
}

export default RecommendationCard;