import mongoose from "mongoose";

const WildlandFireModule_K_Schema = new mongoose.Schema({
    nfdrs_fuel_model_at_origin: String,
});

export default mongoose.model("WildlandFireModule_K", WildlandFireModule_K_Schema);
