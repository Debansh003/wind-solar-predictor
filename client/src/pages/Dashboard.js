import { useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [temp, setTemp] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  const [result, setResult] = useState(null);

  const handlePredict = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/predict", {
        temp: Number(temp),
        wind: Number(wind),
        humidity: Number(humidity),
      });

      setResult(res.data.prediction);
    } catch (err) {
      console.error(err);
      alert("Error getting prediction");
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>⚡ Energy Prediction Dashboard</h1>

      <input
        placeholder="Temperature"
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
      /><br /><br />

      <input
        placeholder="Wind Speed"
        value={wind}
        onChange={(e) => setWind(e.target.value)}
      /><br /><br />

      <input
        placeholder="Humidity"
        value={humidity}
        onChange={(e) => setHumidity(e.target.value)}
      /><br /><br />

      <button onClick={handlePredict}>Predict</button>

      {result && (
        <h2>⚡ Predicted Energy: {result.toFixed(2)}</h2>
      )}
    </div>
  );
}