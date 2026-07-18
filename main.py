from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Journey(BaseModel):
    source: str
    destination: str
    date: str
    time: str

@app.get("/")
def home():
    return {"message": "TrafficQ API Running"}

@app.post("/predict")
def predict(journey: Journey):
    # Replace this with your ML model later
    return {
        "traffic": "Heavy",
        "travel_time": "45 mins",
        "congestion_score": 87,
        "departure_time": "08:10 AM"
    }