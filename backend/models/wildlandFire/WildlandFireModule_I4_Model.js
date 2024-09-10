import mongoose from "mongoose";

const WildlandFireModule_I4_Schema = new mongoose.Schema({
    primary_crops_burned___crop_1: String,
    primary_crops_burned___crop_2: String,
    primary_crops_burned___crop_3: String,
});

export default mongoose.model("WildlandFireModule_I4", WildlandFireModule_I4_Schema);
