import joblib
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
ML_DIR = BASE_DIR / "ml"

model = joblib.load(ML_DIR / "random_forest.pkl")

print("✅ Random Forest model loaded successfully!")