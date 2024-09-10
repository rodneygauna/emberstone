import mongoose from "mongoose";

const WildlandFireModule_D3_Schema = new mongoose.Schema({
    factor_contributing_to_ignition_1: String,
    factor_contributing_to_ignition_2: String,
});

export default mongoose.model("WildlandFireModule_D3", WildlandFireModule_D3_Schema);
