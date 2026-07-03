from fastapi import FastAPI 
from pydantic import BaseModel 
from app.routers.journey import router

app = FastAPI() 
class Traffic(BaseModel):
    source: str 
    destination: str 
    time : str 


@app.get("/")
def home():
    return {"message": "Welcome to the Traffic API"}

app.include_router(router)