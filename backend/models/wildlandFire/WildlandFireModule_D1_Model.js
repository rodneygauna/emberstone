import mongoose from "mongoose";

const WildlandFireModule_D1_Schema = new mongoose.Schema({
    wildland_fire_cause: String,
});

export default mongoose.model("WildlandFireModule_D1", WildlandFireModule_D1_Schema);
