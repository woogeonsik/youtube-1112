import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/Comment";

const PORT = process.env.PORT || 4279;

const handleListening = () =>
  console.log(`✅Listning on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
