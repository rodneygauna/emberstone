import mongoose from "mongoose";

const ArsonModule_G2_Schema = new mongoose.Schema({
    extent_of_fire_involvement_on_arrival: String,
});

export default mongoose.model("ArsonModule_G2", ArsonModule_G2_Schema);
