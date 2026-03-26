import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib

data = pd.read_csv("data.csv")

X = data[["temperature", "wind_speed", "humidity"]]
y = data["energy_output"]

model = LinearRegression()
model.fit(X, y)

joblib.dump(model, "model.pkl")

print("Model trained successfully")