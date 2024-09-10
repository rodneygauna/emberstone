import mongoose from "mongoose";

const WildlandFireModule_L4_Schema = new mongoose.Schema({
    activity_of_person: String,
});

export default mongoose.model("WildlandFireModule_L4", WildlandFireModule_L4_Schema);
