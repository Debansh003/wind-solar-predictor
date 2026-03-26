from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

model = joblib.load("model.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    features = np.array([[data["temp"], data["wind"], data["humidity"]]])
    prediction = model.predict(features)

    return jsonify({
        "prediction": float(prediction[0])
    })

app.run(port=5001)