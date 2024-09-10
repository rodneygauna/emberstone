import mongoose from "mongoose";

const FireModule_D1_Schema = new mongoose.Schema({
    area_of_fire_origin: String,
});

export default mongoose.model("FireModule_D1", FireModule_D1_Schema);
