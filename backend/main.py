
from fastapi import FastAPI
from typing import Dict

# Create an instance of the FastAPI class
app = FastAPI(
    title="Bio-Astra Navigator API",
    description="API for accessing NASA bioscience research insights.",
    version="0.1.0"
)

# Define a route for the root URL ("/")
@app.get("/")
def read_root() -> Dict[str, str]:
    """
    Root endpoint that returns a welcome message.
    """
    return {"message": "Welcome to the Bio-Astra Navigator API!"}