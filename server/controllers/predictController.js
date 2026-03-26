import axios from "axios";

export const getPrediction = async (req, res) => {
  try {
    const { temp, wind, humidity } = req.body;

    const response = await axios.post("http://127.0.0.1:5001/predict", {
      temp,
      wind,
      humidity,
    });

    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "ML service error" });
  }
};