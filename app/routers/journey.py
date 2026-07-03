from fastapi import APIRouter 

router = APIRouter(prefix="/journey" , tags=["Journey"]) 

@router.post("/")
def create_journey():
    return{
        "message": "Journey created successfully"
    }

@router.get("/traffic")
def get_traffic():
    return {
        "trafffic": "Heavy",
        "estimated_time": "30 minutes"
    }