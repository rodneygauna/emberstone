import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({ path: "./.env" });

// MongoDB Options
const options = {
  useNewUrlParser: true,
  autoIndex: false,
  maxPoolSize: 10,
};


// Start server and connect to MongoDB
const PORT = process.env.PORT || 3001;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    await mongoose.connect(process.env.MONGO_URI, options);
    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
});
