from fastapi import FastAPI 
from pydantic import BaseModel 

app = FastAPI() 
class Traffic(BaseModel):
    source: str 
    destination: str 
    time : str 


@app.post("/traffic")
def create_traffic(request: Traffic):
   return {"message": "Traffic data received", "request":request.source}


@app.get("/")
def get_func():
    return {"Welcome to TrafficQ API"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}

@app.post("/journey") 
def create_journey(request: Traffic):
    return {"message": "Recieved journey data", "source": request.source}

@app.get("/traffic")
def get_traffic():
    return {"traffic": "Heavy", "estimated_time": "30 minutes"}