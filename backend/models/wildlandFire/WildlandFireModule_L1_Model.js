import mongoose from "mongoose";

const WildlandFireModule_L1_Schema = new mongoose.Schema({
    person_responsible_for_fire: String,
});

export default mongoose.model("WildlandFireModule_L1", WildlandFireModule_L1_Schema);
