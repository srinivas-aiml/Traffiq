from fastapi import FastAPI 
from pydantic import BaseModel 
from app.routers.journey import router

app = FastAPI() 

@app.get("/")
def home():
    return {"message": "Welcome to the Traffic API"}

app.include_router(router)