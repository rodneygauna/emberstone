import mongoose from "mongoose";

const WildlandFireModule_I3_Schema = new mongoose.Schema({
    total_acres_burned: String,
});

export default mongoose.model("WildlandFireModule_I3", WildlandFireModule_I3_Schema);
