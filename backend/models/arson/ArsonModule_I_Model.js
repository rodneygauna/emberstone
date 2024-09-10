import mongoose from "mongoose";

const ArsonModule_I_Schema = new mongoose.Schema({
    other_investigative_information: String,
});

export default mongoose.model("ArsonModule_I", ArsonModule_I_Schema);
