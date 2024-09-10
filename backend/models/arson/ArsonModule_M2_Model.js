import mongoose from "mongoose";

const ArsonModule_M2_Schema = new mongoose.Schema({
    age: String,
    date_of_birth: String,
});

export default mongoose.model("ArsonModule_M2", ArsonModule_M2_Schema);
