import mongoose from "mongoose";

const WildlandFireModule_C_Schema = new mongoose.Schema({
    area_type: String,
});

export default mongoose.model("WildlandFireModule_C", WildlandFireModule_C_Schema);
