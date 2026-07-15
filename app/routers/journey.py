from fastapi import APIRouter
from app.services import prediction_services

router = APIRouter()

@router.get("/model-status")
def model_status():
    return {"message": "Model loaded successfully"}