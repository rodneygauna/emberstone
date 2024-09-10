import mongoose from "mongoose";

const WildlandFireModule_G_Schema = new mongoose.Schema({
    equipment_involved: String,
});

export default mongoose.model("WildlandFireModule_G", WildlandFireModule_G_Schema);
