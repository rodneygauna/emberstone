import mongoose from "mongoose";

const WildlandFireModule_L2_Schema = new mongoose.Schema({
    person_involved_gender: String,
});

export default mongoose.model("WildlandFireModule_L2", WildlandFireModule_L2_Schema);
