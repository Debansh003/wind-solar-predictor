import express from "express";
import cors from "cors";
import predictRoutes from "./routes/predictRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", predictRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});