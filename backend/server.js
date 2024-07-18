import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({ path: "./.env" });

// Start server and connect to MongoDB
const PORT = process.env.PORT || 3001;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
});
