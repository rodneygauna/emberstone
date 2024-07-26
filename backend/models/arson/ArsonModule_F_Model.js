import mongoose from "mongoose";

const ArsonModule_F_Schema = new mongoose.Schema({
    apparent_group_involvement: String,
});

export default mongoose.model("ArsonModule_F", ArsonModule_F_Schema);
