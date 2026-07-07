from fastapi import FastAPI 

from app.routers.journey import router

app = FastAPI() 

@app.get("/")
def home():
    return {"message": "Welcome to the Traffic API"}

app.include_router(router)