import dotenv from "dotenv";
import connectDB from "./DB/index.js";
import { app } from "./app.js";

dotenv.config({
  path: './env'
});

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`✅ Server is running at http://0.0.0.0:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ MONGO DB connection failed !!!", err);
  });