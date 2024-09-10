import mongoose from "mongoose";

const WildlandFireModule_D4_Schema = new mongoose.Schema({
    fire_suppression_factor___1: String,
    fire_suppression_factor___2: String,
    fire_suppression_factor___3: String,
});

export default mongoose.model("WildlandFireModule_D4", WildlandFireModule_D4_Schema);
