from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Journey(BaseModel):
    source: str
    destination: str
    date: str
    time: str

@app.post("/journey")
def predict_traffic(journey: Journey):
    return {
        "traffic": "Heavy",
        "estimated_time": "55 minutes",
        "message": f"Trip from {journey.source} to {journey.destination}"
    }