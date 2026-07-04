from pydantic import BaseModel

class Traffic(BaseModel):
    source: str 
    destination: str 
    time : str 

class Journey(BaseModel):
    source: str 
    destination : str
    date : str 
    time :str
class Prediction(BaseModel):
    traffic_level: str
    estimated_time: str
    congestion_score: float
    suggested_departure_time: str
