from fastapi import APIRouter 
from app.models.models import Journey,Prediction

router = APIRouter(prefix="/journey" , tags=["Journey"]) 

@router.post("/")
def create_journey(journey: Journey):
    return{
        "message": "Journey created successfully",
        "data":journey
    }

@router.get("/traffic")
def get_traffic():
    return {
        "trafffic": "Heavy",
        "estimated_time": "30 minutes"
    }