import mongoose from "mongoose";

const BasicModule_H3_Schema = new mongoose.Schema({
    hazmat_released: String,
});

export default mongoose.model("BasicModule_H3", BasicModule_H3_Schema);
